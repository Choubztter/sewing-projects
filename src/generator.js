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
  patternImages: [{
    src: 'patron-azara.jpg',
    alt: 'Patron Azara'
  }],
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
      <li>Type : Manteau</li>
      <li>Editeur : République du Chiffon</li>
      <li>Difficulté : ⚫⚫⚫⚫</li>
    </ul>`,
  patternImages: [{
    src: 'patron-ernest.jpg',
    alt: 'Patron Ernest'
  }],
  fabricHTML: `<ul>
      <li>Matière : Lainage laine/cachemire</li>
      <li>Couleur : Gris anthracite chiné</li>
      <li>Métrage : 270cm</li>
      <li>Vendeur : <a href="https://www.thesweetmercerie.com/tissu-lainage-laine-cachemire-gris-anthracite-chine,fr,4,TLPE5021601.cfm" target="_blank">The Sweet Mercerie</a></li>
      <li>Doublure : Doublure en pongé antistatique deluxe</li>
      <li>Couleur : Pêche</li>
      <li>Métrage : 200cm</li>
      <li>Vendeur : <a href="https://www.rascol.com/A-276514-doublure-en-ponge-antistatique-deluxe-peche.aspx?tracking=Doofinder" target="_blank">Rascol</a></li>
    </ul>`,
  fabricImages: [{
      src: 'tissu-cachemire-anthracite.jpg',
      alt: 'Tissu laine/cachemire'
    },
    {
      src: 'tissu-doublure-peche.jpg',
      alt: 'Doublure pongé pêche'
    }
  ],
  notesHTML: ''
})

// Pyjama
projects.push({
  file: 'projet-pyjama1.html',
  code: 'pyjama',
  title: 'Christmas pyjamas',
  patternHTML: `<ul>
    <li>Haut : Plantain</li>
    <li>Editeur : <a href="https://shop.deer-and-doe.fr/fr/patrons-de-couture/20-patron-t-shirt-plantain.html" target="_blank">Deer and Doe</a></li>
    <li>Bas : Pajama pants</li>
    <li>Editeur : <a href="https://5outof4.com/product/pajama-pants/" target="_blank">5 out of 4 Patterns</a></li>
    <li>Difficulté : ⚫⚫⚪⚪⚪</li>
  </ul>`,
  patternImages: [{
    src: 'patron-plantain.jpg',
    alt: 'Patron Plantain'
  },
  {
    src: 'patron-pajama.jpg',
    alt: 'Patron Pajama Pants'
  }
],
  fabricHTML: `<ul>
    <li>Matière : Jersey 76% Coton, 21% Pes, 3% EA </li>
    <li>Couleur/Motif : Gris/Sucres d'orge</li>
    <li>Métrage Plantain : 150cm</li>
    <li>Métrage Pajama pants : --</li>
    <li>Vendeur : <a href="https://www.thesweetmercerie.com/" target="_blank">The Sweet Mercerie</a></li>
  </ul>`,
  fabricImages: [{
    src: 'tissu-jersey-candycane.jpg',
    alt: 'Jersey Candy cane'
  }],
  notesHTML: `Pajama pants : patron pdf gratuit très bien fait.
Montage du pdf et du patron très faciles.
Drôle de technique pour l'élastique du pantalon mais ça fonctionne bien.
Très confortable. <br/><br/>
Plantain : Comme d'habitude, des difficultés au montage de l'encolure > prendre le temps !
La prochaine fois, essayer de réduire le décolleté.
Un peu serré au niveau des bras, peut être à cause des motifs qui font perdre un peu en élasticité ?
`
})

// Sofia
projects.push({
  code: 'sofia',
  file: 'projet-sofia1.html',
  title: 'Blouse Sofia de Noël',
  patternHTML: `<ul>
    <li>Nom : Sofia</li>
    <li>Type : Blouse cache-coeur</li>
    <li>Editeur : La Maison Victor</li>
    <li>Numéro : Septembre/Octobre 2018</li>
    <li>Difficulté : ⚫⚫⚪⚪</li>
  </ul>`,
  patternImages: [{
    src: 'patron-sofia.jpg',
    alt: 'Patron Sofia'
  },
  {
    src: 'patron-sofia2.jpg',
    alt: 'Patron Sofia'
  }
],
  fabricHTML: `<ul>
    <li>Matière : Velours polyester stretch</li>
    <li>Couleur : Vert sapin</li>
    <li>Métrage : 130cm</li>
    <li>Vendeur : <a href="https://www.rascol.com/A-272329-tissu-velours-stretch-vert-sapin.aspx" target="_blank">Rascol</a></li>
  </ul>`,
  fabricImages: [{
    src: '',
    alt: ''
  }],
  notesHTML:
  `<p>Modèle rapide à coudre (coupé et cousu aux 3/4 en un après-midi). Explications claires, patron bien pensé, comme souvent avec La Maison Victor. <br>
    <br>Difficultés : <br>
    ➤ Les plis du devant qui finissent par créer beaucoup d'épaisseur avec les autres parties du patron. Il faut faire attention à ce que tous les bords soient bien alignés pour ne pas créer de trous à l'assemblage du liseré du bas. <br>
    ➤ Le tissu très glissant surtout en envers contre envers (faire un bâti)<br>
    ➤ Sens du tissu pour le velours. Mon liseré du bas est à rebrousse poil, pas très gênant mais un peu frustrant.
  </p>`
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