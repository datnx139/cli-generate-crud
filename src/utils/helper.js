const fs = require('fs')

const createFolderIfNotExists = async (folderName, path = null) => {
  try {
    if (!fs.existsSync(folderName)) {
      fs.mkdirSync(folderName)
    }
  
    if (path !== null && !fs.existsSync(`${folderName}/${path}`)) {
      fs.mkdirSync(`${folderName}/${path}`)
    }
  } catch (error) {
    console.log(error)
  }
}

exports.createFolderIfNotExists = createFolderIfNotExists
