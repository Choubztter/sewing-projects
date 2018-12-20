const fs = require('fs')

const dropdown = `<div class="dropdown">
  <a class="dropdown-item" href="./projet-sofia1.html">Chemisier Sofia de Noël</a>
  <a class="dropdown-item" href="./projet-ernest1.html">Manteau Ernest</a>
  <a class="dropdown-item" href="./projet-azara1.html">Jupe Azara</a>
  <a class="dropdown-item" href="./projet-pyjama1.html">Christmas pyjamas</a>
  <a class="dropdown-item" href="./projet-calecon1.html">Calecon Homme</a>
</div>`

const projectFiles = fs.readdirSync(`${__dirname}/projects`)
for (let projectFile of projectFiles) {
  console.log(projectFile)
  // read the content of the project file
  let content = fs.readFileSync(`${__dirname}/projects/${projectFile}`, 'utf8')
  // replace "{{dropdownProjects}}" placeholder by the constant "dropdown"
  content = content.replace(/{{dropdownProjects}}/gi, dropdown)
  // write the updated content to the public directory
  fs.writeFileSync(`${__dirname}/../public/${projectFile}`, content)
}
