const toProjectsDropdown = (projects, status) => {
  const projectLinks = projects
    .filter(project => status && project.status && status === project.status)
    .map(project => `<a class="dropdown-item" href="./projet-${project.code}1.html">${project.title}</a>`)
    .join('\n')
  return `<div class="dropdown">
${projectLinks}
</div>`
}

const toLatestProjects = (projects) => {
  return projects
    .map(project => `<a href="${project.link}"><div class="project">
            <div class="illustration">
              <img src="${project.image}" />
            </div>
            <div class="description">
              <h3>${project.name}</h3>
              <p>${project.description}</p>
            </div>
          </div></a>`)
    .join('\n')
}

const toHTML = (projects, latestProjects) => {
  return `<!DOCTYPE html>
  <html lang="fr" dir="ltr">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Choubi Couture</title>
    <link href="style.css" rel="stylesheet">
  </head>
  <body>
    <nav>
      <div class="home">
        <a href="/">Accueil</a>
      </div>
      <div class="projects-menu">
        <a href="#">Mes projets</a>
        ${toProjectsDropdown(projects, 'wip')}
      </div>
      <div class="makings-menu">
        <a href="#">Mes réalisations</a>
        ${toProjectsDropdown(projects, 'finished')}
      </div>
    </nav>
    <header>
      <h1>
        <a href="index.html">Choubi Couture</a>
      </h1>
    </header>
    <main>
      <h2>Dernières réalisations</h2>
      <section class="articles">
        ${toLatestProjects(latestProjects)}
      </section>
    </main>
    <footer>Léa Rumiz - Retrouvez toutes mes créations sur <a href="https://www.instagram.com/lea_rmz/" target="_blank">Instagram</a> </footer>
  </body>
  </html>`
}

module.exports.toHTML = toHTML
