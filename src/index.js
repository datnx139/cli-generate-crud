#!/usr/bin/env node
const { program } = require('commander');
const pageService = require('./services/pageService')
const layoutService = require('./services/layoutService')

class App {
  constructor() {
    this.services = {
      page: pageService,
      layout: layoutService
    }

    this.args = []
  }

  createCommand() {
    const command = program
      .version('0.1.0')
      .option('-f', '--folder <folder>', 'Folder name')
      .option('-n', '--name <name>', 'Your name')
      .parse(process.argv)

    this.handleError(command.args)
    this.args = command.args
  }

  handleError(args) {
    if (!args[0]) {
      console.log('Not found folder name')
      process.exit(1)
    }

    if (!args[1]) {
      console.log('Not found file name')
      process.exit(1)
    }
  }

  async run() {    
    const service = this.args[0]
    const path = this.args[1]

    if (this.services[this.args[0]]) {
      await this.services[service].run(path)
    } else {
      console.log("Command not found")
      process.exit(1)
    }
  }
}

const app = new App()
app.createCommand()
app.run()
