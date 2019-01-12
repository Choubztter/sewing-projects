const projects = []
// Azara
projects.push({
  file: 'projet-azara1.html',
  code: 'azara',
  title: 'Jupe Azara',
  patternHTML: `<ul>
  <li>Nom : Azara</li>
  <li>Type : Jupe</li>
  <li>Editeur : Deer and Doe</li>
  <li>Difficulté : ⚫⚫⚫⚫⚪</li>
</ul>`,
  patternImage: {
    src: 'patron-azara.jpg',
    alt: 'Patron Azara'
  },
  fabricHTML: `<ul>
  <li>Matière : Crêpe polyester </li>
  <li>Couleur : Prune</li>
  <li>Métrage : 190cm</li>
  <li>Vendeur : <a href="https://www.cousette.com/synthetique/6608-luxury-crepe-prunette.html" target="_blank">Cousette</a></li>
  <li>Doublure : --</li>
  <li>Couleur : --</li>
  <li>Métrage : 160cm</li>
  <li>Vendeur : --</li>
</ul>`,
  fabricImages: [{
    src: 'tissu-crepe-prunette.jpg',
    alt: 'Tissu luxury crêpe prunette'
  }],
  notesHTML: ''
})

// Ernest
projects.push({
  file: 'projet-ernest1.html',
  code: 'ernest',
  title: 'Manteau Ernest',
  patternHTML: `<ul>
      <li>Nom : Ernest</li>
      <li>Type : manteau</li>
      <li>Editeur : République du Chiffon</li>
      <li>Difficulté : ⚫⚫⚫⚫</li>
    </ul>`,
  patternImage: {
    src: 'patron-ernest.jpg',
    alt: 'Patron Ernest'
  },
  fabricHTML: `<ul>
      <li>Matière : Lainage laine/cachemire</li>
      <li>Couleur : Gris anthracite chiné</li>
      <li>Métrage : 270cm</li>
      <li>Vendeur : <a href="https://www.thesweetmercerie.com/tissu-lainage-laine-cachemire-gris-anthracite-chine,fr,4,TLPE5021601.cfm" target="_blank">The Sweet Mercerie</a></li>
      <li>Doublure : --</li>
      <li>Couleur : --</li>
      <li>Métrage : 200cm</li>
      <li>Vendeur : --</li>
    </ul>`,
  fabricImages: [{
      src: 'tissu-cachemire-anthracite.jpg',
      alt: 'Tissu laine/cachemire'
    },
    {
      src: 'tissu-cachemire-anthracite.jpg',
      alt: 'Doublure cachemire'
    }
  ],
  notesHTML: ''
})

// Pyjama
projects.push({
  file: 'projet-pyjama1.html',
  code: 'pyjama',
  title: '',
  patternHTML: `<ul>
    <li>Nom : </li>
    <li>Type : </li>
    <li>Editeur : </li>
    <li>Difficulté : ⚫⚫⚪⚪</li>
  </ul>`,
  patternImage: {
    src: '',
    alt: ''
  },
  fabricHTML: `<ul>
    <li>Matière : </li>
    <li>Couleur : </li>
    <li>Métrage : </li>
    <li>Vendeur : </li>
    <li>Doublure : </li>
    <li>Couleur : </li>
    <li>Métrage : </li>
    <li>Vendeur : <a href="" target="_blank"></a></li>
  </ul>`,
  fabricImages: [{
    src: '',
    alt: ''
  }],
  notesHTML: ''
})

// Sofia
projects.push({
  code: 'sofia',
  file: 'projet-sofia1.html',
  title: '',
  patternHTML: `<ul>
    <li>Nom : </li>
    <li>Type : </li>
    <li>Editeur : </li>
    <li>Difficulté : ⚫⚫⚪⚪</li>
  </ul>`,
  patternImage: {
    src: '',
    alt: ''
  },
  fabricHTML: `<ul>
    <li>Matière : </li>
    <li>Couleur : </li>
    <li>Métrage : </li>
    <li>Vendeur : </li>
    <li>Doublure : </li>
    <li>Couleur : </li>
    <li>Métrage : </li>
    <li>Vendeur : <a href="" target="_blank"></a></li>
  </ul>`,
  fabricImages: [{
    src: '',
    alt: ''
  }],
  notesHTML: ''
})

/*
projects.push({
  file: '',
  code: '',
  title: '',
  patternHTML: `<ul>
    <li>Nom : </li>
    <li>Type : </li>
    <li>Editeur : </li>
    <li>Difficulté : ⚫⚫⚪⚪</li>
  </ul>`,
  patternImage: {
    src: '',
    alt: ''
  },
  fabricHTML: `<ul>
    <li>Matière : </li>
    <li>Couleur : </li>
    <li>Métrage : </li>
    <li>Vendeur : </li>
    <li>Doublure : </li>
    <li>Couleur : </li>
    <li>Métrage : </li>
    <li>Vendeur : <a href="" target="_blank"></a></li>
  </ul>`,
  fabricImages: [{
    src: '',
    alt: ''
  }],
  notesHTML: ''
})
*/

const projectTemplate = require('./project-template')
//console.log(projectTemplate.toHTML(projects, projects[1]))

const fs = require('fs')

for (project of projects) {
  console.log(project.code)
  fs.writeFileSync(`public/${project.file}`, projectTemplate.toHTML(projects, project))
}

/*
pattern: [{
    key: 'Nom',
    value: 'Azara'
  },
  {
    key: 'Type',
    value: 'Jupe'
  },
  {
    key: 'Editeur',
    value: 'Deer and Doe'
  },
  {
    key: 'Difficulté',
    value: 4,
    max: 5
  },
],
*/
