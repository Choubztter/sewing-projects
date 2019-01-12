const projectsDropdownHTML = (projects) => {
  const result = []
  result.push('<div class="dropdown">')
  for (let project of projects) {
    result.push(`<a class="dropdown-item" href="./projet-${project.code}1.html">${project.title}</a>`)
  }
  result.push('</div>')
  return result.join('\n')
}

const toPatternImage = (img) => {
  if (img) {
    return `<figure>
  <img src="./${img.src}" alt="${img.alt}" width="300px" />
</figure>`
  }
  return ''
}

const toFabricImages = (images) => {
  const result = []
  for (let img of images) {
    result.push(toFabricImage(img))
  }
  return result.join('\n')
}

const toFabricImage = (img) => {
  if (img) {
    return `<figure>
  <img src="./${img.src}" alt="${img.alt}" width="300px" />
</figure>`
  }
  return ''
}

const toHTML = (projects, project) => {
  return `<!DOCTYPE html>
  <html lang="fr" dir="ltr">

  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${project.title}</title>
    <link href="style.css" rel="stylesheet">
  </head>

  <body>
    <nav>
      <div class="home">
        <a href="/">Accueil</a>
      </div>
      <div class="projects-menu">
        <a href="#">Mes projets</a>
        ${projectsDropdownHTML(projects)}
      </div>
    </nav>
    <header>
      <h1>
        <a href="index.html">Choubi Couture</a>
      </h1>
    </header>
    <main>
      <article class="project project-${project.code}">
        <h2>${project.title}</h2>
        <section class="pattern">
          <div class="content">
            <div class="infos">
              <h3>Patron</h3>
              ${project.patternHTML}
            </div>
            ${toPatternImage(project.patternImage)}
          </div>
        </section>
        <section class="fabric">
          <div class="content">
            <div class="infos">
              <h3>Tissu</h3>
              ${project.fabricHTML}
            </div>
            <div class="images">
              ${toFabricImages(project.fabricImages)}
            </div>
          </div>
        </section>
        <section class="note">
          <h3>Notes</h3>
          ${project.notesHTML}
        </section>
      </article>
    </main>
    <footer>Léa Rumiz - Retrouvez toutes mes créations sur <a href="https://www.instagram.com/lea_rmz/" target="_blank">Instagram</a> </footer>

  </body>

  </html>`
}

module.exports.toHTML = toHTML
