const projects = [{
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
    fabricImage: {
      src: 'tissu-crepe-prunette.jpg',
      alt: 'Tissu luxury crêpe prunette'
    },
    notesHTML: ''
  },
  {
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
    fabricImage: {
      src: 'tissu-cachemire-anthracite.jpg',
      alt: 'Tissu laine/cachemire'
    },
    notesHTML: ''
  },
  {
    code: 'pyjama'
  },
  {
    code: 'sofia'
  }
]


const projectTemplate = require('./project-template')

//console.log(projectTemplate.toHTML(projects, projects[0]))
console.log(projectTemplate.toHTML(projects, projects[1]))

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
