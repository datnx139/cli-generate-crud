const template = require('./templates/page')
const fs = require('fs')

async function createCRUDPageFiles(path) {

  if (!fs.existsSync(`./pages/${path}`)) {
    fs.mkdirSync(`./pages/${path}`)
  }

  // Tạo tệp Create
  fs.writeFileSync(`.pages/${path}/index.vue`, template.list());

  fs.writeFileSync(`.pages/${path}/[id].vue`, template.detail())
}

exports.createCRUDPageFiles =  createCRUDPageFiles