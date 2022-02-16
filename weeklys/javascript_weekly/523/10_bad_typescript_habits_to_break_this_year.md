---
title: '10 Bad TypeScript Habits to Break This Year'
date: '2022-01-30'
#请根据文章内容在下面数组中选择标签，删除无关的标签，标签数量不限但不可直接新增标签！
tags:
    [
        'CSS',
        'JavaScript',
        'HTML',
        'TypeScript',
        'ECMAScript',
        'Chrome',
        '游览器',
        '网络',
        'React',
        'Vue',
        'webpack',
        'babel',
        'vite',
        'node',
    ]
#没有相关的标签？在专有的discussion中讨论：https://github.com/FEDarling/weekly-tracker/discussions/51#discussion-3827174
#请不要随意增删标签，上面选项中没有可选的相关标签，一定要先讨论！
publish: false
---

![](https://cdn.jsdelivr.net/gh/daodaolee/photobed@main/img/20220212151040.png)

<!--以上是预览信息，图片一张或限制百字左右，前者优先-->
<!-- more -->

TypeScript and JavaScript have steadily evolved over the last years, and some of the habits we built over the last decades have become obsolete. Some might never have been meaningful. Here's a list of 10 habits that we all should break.

If you are interested in more articles and news about web product development and entrepreneurship, please feel free to [follow me on Twitter](https://twitter.com/intent/follow?original_referer=https%253A%252F%252Fstartup-cto.net%252F&ref_src=twsrc%5Etfw&region=follow_link&screen_name=The_Startup_CTO&tw_p=followbutton).

Onto the examples! Please note that each "What it should look like" only fixes the issue discussed, even if there are further code smells that should be addressed.

## 1. Not using `strict` mode

### What it looks like

Using a `tsconfig.json` without strict mode.

```json
{
    "compilerOptions": {
        "target": "ES2015",
        "module": "commonjs"
    }
}
```

### What it should look like

Just enable `strict` mode:

```json
{
    "compilerOptions": {
        "target": "ES2015",
        "module": "commonjs",
        "strict": true
    }
}
```

### Why we do it

Introducing stricter rules in an existing codebase takes time.

### Why we shouldn't

Stricter rules will make it easier to change code in the future, so the time spent on fixing the code is returned and then some when working on the repository in the future.

## 2. Defining default values with `||`

### What it looks like

Falling back with || for optional values:

```ts
function createBlogPost(text: string, author: string, date?: Date) {
    return {
        text: text,
        author: author,
        date: date || new Date(),
    };
}
```

### What it should look like

Use the new `??` operator, or, even better, define the fallback right at the parameter level.

```ts
function createBlogPost (text: string, author: string, date: Date = new Date())
  return {
    text: text,
    author: author,
    date: date
  }
}
```

### Why we do it

The `??` operator has just been introduced last year, and when using values in the middle of a long function it might be hard to set them already as parameter defaults.

### Why we shouldn't

`??`, unlike `||`, falls back only for `null` or `undefined`, not for all falsy values. Also, if your functions are so long that you cannot define defaults at the beginning, then splitting them might be a good idea.

## 3. Using `any` as type

### What it looks like

Using `any` for data when you are unsure about the structure.

```ts
async function loadProducts(): Promise<Product[]> {
    const response = await fetch('https://api.mysite.com/products');
    const products: any = await response.json();
    return products;
}
```

### What it should look like

In almost every situation where you type something as `any`, you should type it as `unknown` instead.

```ts
async function loadProducts(): Promise<Product[]> {
    const response = await fetch('https://api.mysite.com/products');
    const products: unknown = await response.json();
    return products as Product[];
}
```

### Why we do it

`any` is convenient, as it basically disables all type-checks. Often, `any` is used even in official typings (e. g. `response.json()` from the example above is typed as `Promise<any>` by the TypeScript team).

### Why we shouldn't

It basically disables all type-checks. Anything that comes in via `any` will completely forego any type-checks. This leads to hard to catch bugs, as code will fail only when our assumptions about type structure are relevant to the runtime code.

## 4. `val as SomeType`

### What it looks like

Forcefully telling the compiler about a type that it cannot infer.

```ts
async function loadProducts(): Promise<Product[]> {
    const response = await fetch('https://api.mysite.com/products');
    const products: unknown = await response.json();
    return products as Product[];
}
```

### What it should look like

That's what type guards are for.

```ts
function isArrayOfProducts(obj: unknown): obj is Product[] {
    return Array.isArray(obj) && obj.every(isProduct);
}

function isProduct(obj: unknown): obj is Product {
    return obj != null && typeof (obj as Product).id === 'string';
}

async function loadProducts(): Promise<Product[]> {
    const response = await fetch('https://api.mysite.com/products');
    const products: unknown = await response.json();
    if (!isArrayOfProducts(products)) {
        throw new TypeError('Received malformed products API response');
    }
    return products;
}
```

### Why we do it

When converting from JavaScript to TypeScript, the existing codebase often makes assumptions about types that cannot be deduced automatically by the TypeScript compiler. In these cases, throwing in a quick `as SomeOtherType` can speed up the conversion without having to loosen the settings in tsconfig.

### Why we shouldn't

Even if the assertion might be save right now, this might change when someone moves code around. The type guard will ensure that all checks are explicit.

## 5. `as any` in tests

### What it looks like

Creating incomplete stand-ins when writing tests.

```ts
interface User {
  id: string
  firstName: string
  lastName: string
  email: string
}

test('createEmailText returns text that greats the user by first name', () => {
  const user: User = {
    firstName: 'John'
  } as any

  expect(createEmailText(user)).toContain(user.firstName)
}
```

### What it should look like

If you need to mock data for your tests, move the mocking logic next to the thing you mock and make it reusable.

```ts
interface User {
  id: string
  firstName: string
  lastName: string
  email: string
}

class MockUser implements User {
  id = 'id'
  firstName = 'John'
  lastName = 'Doe'
  email = 'john@doe.com'
}

test('createEmailText returns text that greats the user by first name', () => {
  const user = new MockUser()

  expect(createEmailText(user)).toContain(user.firstName)
}
```

### Why we do it

When writing tests in a codebase that doesn't have great test coverage yet, there are often complicated big data structures, but only parts of it are needed for the specific functionality under test. Not having to worry about the other properties is easier in the short term.

### Why we shouldn't

Foregoing the creation of a mock will bite us, latest when one of the properties changes and we need to change it in all tests instead of one central location. Also, there will be situations where the code under test relies on properties that we did not deem important before, and then all tests for that functionality need to be updated.

## 6. Optional properties

### What it looks like

Marking properties as optional that are sometimes there and sometimes not.

```ts
interface Product {
    id: string;
    type: 'digital' | 'physical';
    weightInKg?: number;
    sizeInMb?: number;
}
```

### What it should look like

Explicitly model which combinations exist and which don't.

```ts
interface Product {
    id: string;
    type: 'digital' | 'physical';
}

interface DigitalProduct extends Product {
    type: 'digital';
    sizeInMb: number;
}

interface PhysicalProduct extends Product {
    type: 'physical';
    weightInKg: number;
}
```

### Why we do it

Marking properties as optional instead of splitting out types is easier and produces less code. It also requires a deeper understanding of the product being built and might limit usage of code if assumptions about the product change.

### Why we shouldn't

The big benefit of type systems is that they can replace runtime checks with compile-time checks. With more explicit typing, it is possible to get compile-time checks for bugs that otherwise might have gotten unnoticed, e. g. by making sure that every `DigitalProduct` has a `sizeInMb`.

## 7. One letter generics

### What it looks like

Naming a generic with one letter

```ts
function head<T>(arr: T[]): T | undefined {
    return arr[0];
}
```

### What it should look like

Giving a full descriptive type name.

```ts
function head<Element>(arr: Element[]): Element | undefined {
    return arr[0];
}
```

### Why we do it

This habit grew I guess because [even the official docs use one-letter names](https://www.typescriptlang.org/docs/handbook/generics.html). It is also quicker to type and requires less thinking to press `T` instead of writing a full name.

### Why we shouldn't

Generic type variables are variables, like any other. We have abandoned the idea of describing the technicalities of variables in their names when IDEs started to just show us these technicalities. E. g. instead of `const strName = 'Daniel'` we now only write `const name = 'Daniel'`. Also, one letter variable names are generally frowned upon because it can be hard to decipher what they mean without looking at their declaration.

## 8. Non-boolean boolean checks

### What it looks like

Checking whether a value is defined by passing the value directly to an `if` statement.

```ts
function createNewMessagesResponse(countOfNewMessages?: number) {
    if (countOfNewMessages) {
        return `You have ${countOfNewMessages} new messages`;
    }
    return 'Error: Could not retrieve number of new messages';
}
```

### What it should look like

Explicitly checking for the condition we care about.

```ts
function createNewMessagesResponse(countOfNewMessages?: number) {
    if (countOfNewMessages !== undefined) {
        return `You have ${countOfNewMessages} new messages`;
    }
    return 'Error: Could not retrieve number of new messages';
}
```

### Why we do it

Writing the check in short looks more succinct and allows us to avoid thinking about what we actually want to check.

### Why we shouldn't

Maybe we should think about what we actually want to check. The examples above for example handle the case of `countOfNewMessages` being `0` differently.

## 9. The Bang Bang operator

### What it looks like

Converting a non-boolean value to boolean.

```ts
function createNewMessagesResponse(countOfNewMessages?: number) {
    if (!!countOfNewMessages) {
        return `You have ${countOfNewMessages} new messages`;
    }
    return 'Error: Could not retrieve number of new messages';
}
```

### What it should look like

Explicitly checking for the condition we care about.

```ts
function createNewMessagesResponse(countOfNewMessages?: number) {
    if (countOfNewMessages !== undefined) {
        return `You have ${countOfNewMessages} new messages`;
    }
    return 'Error: Could not retrieve number of new messages';
}
```

### Why we do it

To some, understanding `!!` is like an initiation ritual to the world of JavaScript. It looks short and succinct, and if you are already used to it, then you know what it is about. It is a shortcut to convert any value to a boolean. Especially if, in a codebase, there is no clear semantic separation between falsy values like `null`, `undefined`, and `''`.

### Why we shouldn't

Like many shortcuts and initiation rituals, using `!!` obfuscates the true meaning of the code by promoting insider knowledge. This makes the codebase less accessible to new developers, be it new to developing in general, or just new to JavaScript. It's also quite easy to introduce subtle bugs. The problem with `countOfNewMessages` being `0` from "Non-boolean boolean checks" persists with `!!`.

## 10. `!= null`

### What it looks like

The little sister of the bang bang operator, `!= null` allows us to check for `null` and `undefined` at the same time.

```ts
function createNewMessagesResponse(countOfNewMessages?: number) {
    if (countOfNewMessages != null) {
        return `You have ${countOfNewMessages} new messages`;
    }
    return 'Error: Could not retrieve number of new messages';
}
```

### What it should look like

Explicitly checking for the condition we care about.

```ts
function createNewMessagesResponse(countOfNewMessages?: number) {
    if (countOfNewMessages !== undefined) {
        return `You have ${countOfNewMessages} new messages`;
    }
    return 'Error: Could not retrieve number of new messages';
}
```

### Why we do it

If you got here, your codebase and your skills are already in quite good shape. Even most linting rulesets that enforce using `!==` over `!=` make an exemption for `!=` null. If there is no clear distinction in the codebase between `null` and `undefined`, then `!=` null helps to shorten a check for both possibilities.

### Why we shouldn't

While `null` values were quite a hassle in the early days of JavaScript, with TypeScript in `strict` mode, they can become a valuable member of the language's tool belt. A common pattern I have seen is defining `null` values as things not being there, and `undefined` as not things that are unknown, e. g. `user.firstName === null` might mean that the user literally does not have a first name, while `user.firstName === undefined` just means that we haven't asked that user yet (and `user.firstName === ''` would mean the first name literally is `''` - you'd be surprised [which kind of names actually exist](https://www.kalzumeus.com/2010/06/17/falsehoods-programmers-believe-about-names/)).

---

> -   译文出自：[weekly-tracker](https://github.com/FEDarling/weekly-tracker) 项目，期待你的加入！
> -   [查看原文](https://startup-cto.net/10-bad-typescript-habits-to-break-this-year)对比阅读
> -   发现错误？[提交 PR](https://github.com/FEDarling/weekly-tracker/blob/main/weeklys/javascript_weekly/523/10_bad_typescript_habits_to_break_this_year.md)
> -   译者：
> -   校对者：
