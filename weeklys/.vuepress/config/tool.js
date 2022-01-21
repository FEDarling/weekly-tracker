

module.exports.formatSideBar = arr => {
  const result = {}
  for (const data of arr) {
    const obj = {
      title: data.name,
      collapsable: false,
      children: []
    }

    const toc = {
      title: data.name,
      collapsable: false,
      children: []
    }

    for (const [num, page] of Object.entries(data.pages)) {
      const splice = page.map(item => `${data.path}${num}/${item}.md`)
      const temp = {
        title: `#${num}`,
        collapsable: false,
        children: splice
      }
      obj.children.push(temp)

      toc.children.push(`/weekly_collect${data.path}${num}.md`)
    }
    
    result[`${data.path}`] = [obj]
    result[`/weekly_collect${data.path}`] = [toc]
  }
  return result
}
