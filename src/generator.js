const projects = []
// Azara
projects.push({
  file: 'projet-azara1.html',
  code: 'azara',
  status: 'wip',
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
  status: 'wip',
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
  status: 'finished',
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
`,
garmentImages: [{
  src: 'realisation-pyjama1.jpg',
  alt: 'Réalisation Christmas pyjamas'
},
{
  src: 'realisation-pyjama2.jpg',
  alt: 'Réalisation Christmas pyjamas'
}]
})

// Sofia
projects.push({
  code: 'sofia',
  file: 'projet-sofia1.html',
  status: 'finished',
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
  </p>`,
  garmentImages: [{
    src: 'realisation-sofia1.jpg',
    alt: 'Réalisation Sofia'
  },
  {
    src: 'realisation-sofia2.jpg',
    alt: 'Réalisation Sofia'
  }]
})

// Bloom
projects.push({
  file: 'projet-bloom1.html',
  code: 'bloom',
  status: 'wip',
  title: 'Sweat Bloom',
  patternHTML: `<ul>
      <li>Nom : Bloom</li>
      <li>Type : Pull sweat</li>
      <li>Editeur : <a href="http://www.lmvcollection.ovh/sweat-bloom/" target="_blank">La Maison Victor</a></li>
      <li>Numéro : Mai/Juin 2017</li>
      <li>Difficulté : ⚫⚫⚪⚪</li>
    </ul>`,
  patternImages: [{
    src: 'patron-bloom1.jpg',
    alt: 'Patron Bloom'
  },
  {
    src: 'patron-bloom2.jpg',
    alt: 'Patron Bloom'
  }],
  fabricHTML: `<ul>
      <li>Matière : Coton Molleton</li>
      <li>Couleur : Noir/Lurex argent</li>
      <li>Métrage : 130cm</li>
      <li>Vendeur : <a href="https://www.cousette.com/molleton-sweat/11090-molleton-noir-lurex-argent.html" target="_blank">Cousette</a></li>
    </ul>`,
  fabricImages: [{
      src: 'tissu-molleton-noir-lurex-argent1.jpg',
      alt: 'Tissu molleton noir/argent'
    },
    {
      src: 'tissu-molleton-noir-lurex-argent2.jpg',
      alt: 'Tissu molleton noir/argent'
    }
  ],
  notesHTML: ''
})

// Bruna
projects.push({
  file: 'projet-bruna1.html',
  code: 'bruna',
  status: 'wip',
  title: 'Chemisier Bruna',
  patternHTML: `<ul>
      <li>Nom : Bruna</li>
      <li>Type : Chemisier</li>
      <li>Editeur : <a href="http://www.lmvcollection.ovh/chemisier-bruna/" target="_blank">La Maison Victor</a></li>
      <li>Numéro : Mars/Avril 2018</li>
      <li>Difficulté : ⚫⚫⚪⚪</li>
    </ul>`,
  patternImages: [{
    src: 'patron-bruna1.jpg',
    alt: 'Patron Bruna'
  },
  {
    src: 'patron-bruna2.jpg',
    alt: 'Patron Bruna'
  }],
  fabricHTML: `<ul>
      <li>Matière : Twill polyester/coton</li>
      <li>Couleur : Gris/Pois dorés</li>
      <li>Métrage : 125cm</li>
      <li>Vendeur : <a href="https://https://www.cousette.com/tissu-pois/11045-twill-gris-pois-or.html" target="_blank">Cousette</a></li>
    </ul>`,
  fabricImages: [{
      src: 'tissu-twill-gris-pois-or1.jpg',
      alt: 'Tissu twill gris/or'
    },
    {
      src: 'tissu-twill-gris-pois-or2.jpg',
      alt: 'Tissu twill gris/or'
    }
  ],
  notesHTML: ''
})

// Kitty
projects.push({
  file: 'projet-kitty1.html',
  code: 'kitty',
  status: 'wip',
  title: 'Blazer Kitty',
  patternHTML: `<ul>
      <li>Nom : Kitty</li>
      <li>Type : Blazer</li>
      <li>Editeur : <a href="http://www.lmvcollection.ovh/blazer-kitty/" target="_blank">La Maison Victor</a></li>
      <li>Numéro : Novembre/Décembre 2017</li>
      <li>Difficulté : ⚫⚫⚫⚪</li>
    </ul>`,
  patternImages: [{
    src: 'patron-kitty1.jpg',
    alt: 'Patron Kitty'
  },
  {
    src: 'patron-kitty2.jpg',
    alt: 'Patron Kitty'
  }],
  fabricHTML: `<ul>
      <li>Matière : 95% Laine / 5% Cachemire</li>
      <li>Couleur : Prince de Galles</li>
      <li>Métrage : 170cm</li>
      <li>Vendeur : <a href="https://www.cousette.com/tissus-lainage/11158-prince-de-galles-gris.html" target="_blank">Cousette</a></li>
    </ul>`,
  fabricImages: [{
      src: 'tissu-prince-de-galles-gris1.jpg',
      alt: 'Tissu Prince de Galles'
    },
    {
      src: 'tissu-prince-de-galles-gris2.jpg',
      alt: 'Tissu Prince de Galles'
    }
  ],
  notesHTML: ''
})

// Ditte
projects.push({
  file: 'projet-ditte1.html',
  code: 'ditte',
  status: 'wip',
  title: 'Robe Ditte',
  patternHTML: `<ul>
      <li>Nom : Ditte</li>
      <li>Type : Robe</li>
      <li>Editeur : <a href="http://www.lmvcollection.ovh/robe-ditte/" target="_blank">La Maison Victor</a></li>
      <li>Numéro : Mars/Avris 2016</li>
      <li>Difficulté : ⚫⚫⚫⚪</li>
    </ul>`,
  patternImages: [{
    src: 'patron-ditte1.jpg',
    alt: 'Patron Ditte'
  },
  {
    src: 'patron-ditte2.jpg',
    alt: 'Patron Ditte'
  }],
  fabricHTML: `<ul>
      <li>Matière : Viscose</li>
      <li>Couleur : Tartan vert/ocre/lurex argent</li>
      <li>Métrage : 165cm</li>
      <li>Vendeur : <a href="https://www.cousette.com/carreaux-vichy/11134-ecossais-lurex-vert-ocre.html" target="_blank">Cousette</a></li>
    </ul>`,
  fabricImages: [{
      src: 'tissu-ecossais-lurex-vert-ocre1.jpg',
      alt: 'Tissu tartan vert/ocre'
    },
    {
      src: 'tissu-ecossais-lurex-vert-ocre2.jpg',
      alt: 'Tissu tartan vert/ocre'
    }
  ],
  notesHTML: ''
})

const projectTemplate = require('./project-template')
//console.log(projectTemplate.toHTML(projects, projects[1]))

const fs = require('fs')

for (project of projects) {
  console.log(`generating ${project.code}...`)
  fs.writeFileSync(`${__dirname}/../public/${project.file}`, projectTemplate.toHTML(projects, project))
}

const wipTotal = projects
  .filter(project => project.status === 'wip')
  .length

const finishedTotal = projects
  .filter(project => project.status === 'finished')
  .length

const total = projects.length
console.log(`\n${total} projects generated.`)
console.log(`${wipTotal} projects in progress and ${finishedTotal} finished project${finishedTotal <= 1 ? '' : 's'}.`)
console.log('Well done Choubi!')

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
