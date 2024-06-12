const template = require('../templates/page')
const helperUtil = require('../utils/helper')
const fs = require('fs')

const createPage = async (path) => {
  try {
    fs.writeFileSync(`./pages/${path}/index.vue`, template.index())
    fs.writeFileSync(`./pages/${path}/[id].vue`, template.detail())

    console.log('success')
  } catch (err) {
    console.log(err)
  }
}

const run = async (path) => {
  const folderName = './pages'
  await helperUtil.createFolderIfNotExists(folderName, path)

  await createPage(path)
}

exports.run = run
