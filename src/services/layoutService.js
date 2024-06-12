const template = require('../templates/page')
const helperUtil = require('../utils/helper')
const fs = require('fs')

const createPage = async (fileName) => {
  try {
    fs.writeFileSync(`./layouts/${fileName}.vue`, template.index())

    console.log('success')
  } catch (err) {
    console.log(err)
  }
}

const run = async (fileName) => {
  const folderName = './layouts'
  await helperUtil.createFolderIfNotExists(folderName)

  await createPage(fileName)
}

exports.run = run
