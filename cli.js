#!/usr/bin/env node
const { program } = require('commander');
const fs = require('fs');
const path = require('path');

program
  .version('0.1.0')
  .option('-f', '--folder <folder>', 'Folder name')
  .option('-n', '--name <name>', 'Your name')
  .parse(process.argv);

  const currentDirectory = __dirname;
  const outputPath = path.join(currentDirectory, process.argv[0]);

console.log(outputPath, 'output')
console.log(program.args[0], 'process.argv')



function createCRUDFiles(entityName, path) {

  fs.mkdirSync(`./pages/${path}`)
  // Tạo tệp Create
  fs.writeFileSync(`./pages/${path}/index.vue`, `
    <template>
      <div>
          <!-- Form để tạo mới ${entityName} -->
      </div>
    </template>
    <script>
        // Logic để tạo mới ${entityName}
    </script>
  `);

  fs.writeFileSync(`./pages/${path}/[id].vue`, `
    <template>
      <div>
          <!-- Form để tạo mới ${entityName} -->
      </div>
    </template>
    <script>
        // Logic để tạo mới ${entityName}
    </script>
  `);

  console.log(`CRUD files for ${entityName} created successfully.`);
}
createCRUDFiles(program.args[1], program.args[0])