// sections/projects.js – renders the "Projects" section
(function () {
  var container = document.getElementById('projects-content');
  if (!container) return;

  var projects = [
    {
      name: 'jnolazco.github.io',
      description: 'Sitio personal construido con HTML, CSS y JavaScript puro.',
      url: 'https://github.com/jnolazco/jnolazco.github.io',
    },
    // Add more projects here as objects with name, description and url
  ];

  var h2 = document.createElement('h2');
  h2.textContent = 'Proyectos';

  var grid = document.createElement('div');
  grid.className = 'projects-grid';

  projects.forEach(function (p) {
    var card = document.createElement('div');
    card.className = 'project-card';

    var title = document.createElement('h3');
    title.textContent = p.name;

    var desc = document.createElement('p');
    desc.textContent = p.description;

    var link = document.createElement('a');
    link.href = p.url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.textContent = 'Ver repositorio →';

    card.appendChild(title);
    card.appendChild(desc);
    card.appendChild(link);
    grid.appendChild(card);
  });

  container.appendChild(h2);
  container.appendChild(grid);
})();
