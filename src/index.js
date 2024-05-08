#!/usr/bin/env node
const { program } = require('commander');
const path = require('path')
const util = require('./util')

program
  .version('0.1.0')
  .option('-f', '--folder <folder>', 'Folder name')
  .option('-n', '--name <name>', 'Your name')
  .parse(process.argv)

const init = () => {
  const args = program.args

  if (!args[0]) {
    console.log('Not found folder name')
    process.exit(1)
  }

  if (!args[1]) {
    console.log('Not found entity name')
    process.exit(1)
  }

  switch(args[0]) {
    case 'page':
      return util.createCRUDPageFiles(args[1])
    default:
      return
  }
}

init()
