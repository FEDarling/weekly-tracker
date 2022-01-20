

module.exports.formatSideBar = arr => {
  let result = {}
  for (const data of arr) {
    const obj = {
      title: data.name,
      collapsable: false,
      children: []
    }

    for (const [num, page] of Object.entries(data.pages)) {
      const splice = page.map(item => `${data.path}${num}/${item}.md`)
      splice.unshift(`${data.path}${num}/toc.md`)
      page.map(item => `${data.path}${num}/${item}.md`).unshift(`${data.path}${num}/toc.md`)
      const temp = {
        title: `#${num}`,
        collapsable: false,
        children: splice
      }
      obj.children.push(temp)
    }
    result[`${data.path}`] = [obj]
    console.log({ [`${data.path}`]: [obj] })
  }
 
  return result
}
