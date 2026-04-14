// sections/about.js – renders the "About / Hero" section
(function () {
  var container = document.getElementById('about-content');
  if (!container) return;

  var h1 = document.createElement('h1');
  h1.textContent = 'Hola, soy ';
  var nameSpan = document.createElement('span');
  nameSpan.className = 'name';
  nameSpan.textContent = 'jnolazco';
  h1.appendChild(nameSpan);
  h1.appendChild(document.createTextNode(' 👋'));

  var subtitle = document.createElement('p');
  subtitle.className = 'subtitle';
  subtitle.textContent = 'Desarrollador de software apasionado por crear soluciones web.';

  var description = document.createElement('p');
  description.textContent = 'Bienvenido a mi sitio personal. Aquí puedes conocer mis proyectos, habilidades y formas de contactarme.';

  var cta = document.createElement('a');
  cta.className = 'cta';
  cta.href = '#projects';
  cta.textContent = 'Ver proyectos';

  container.appendChild(h1);
  container.appendChild(subtitle);
  container.appendChild(description);
  container.appendChild(cta);
})();
