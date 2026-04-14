// sections/contact.js – renders the "Contact" section
(function () {
  var container = document.getElementById('contact-content');
  if (!container) return;

  var links = [
    { label: 'GitHub', url: 'https://github.com/jnolazco' },
    // Add LinkedIn, email, etc. as needed
  ];

  var h2 = document.createElement('h2');
  h2.textContent = 'Contacto';

  var description = document.createElement('p');
  description.textContent = '¿Tienes alguna pregunta o propuesta? No dudes en escribirme.';

  var linksDiv = document.createElement('div');
  linksDiv.className = 'contact-links';

  links.forEach(function (l) {
    var a = document.createElement('a');
    a.href = l.url;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    a.textContent = l.label;
    linksDiv.appendChild(a);
  });

  container.appendChild(h2);
  container.appendChild(description);
  container.appendChild(linksDiv);
})();
