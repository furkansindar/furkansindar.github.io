/* Shared site components: navigation and footer.
   Every page includes this file once, so the header nav and footer
   live in exactly one place instead of being copied into 40+ pages.
   Loaded with defer, so the DOM is ready when this runs. */

(function () {
  var nav = document.getElementById('site-nav');
  var footer = document.getElementById('site-footer');
  if (!nav && !footer) return;

  var links = [
    { href: '/index.html', label: 'Home' },
    { href: '/blog.html', label: 'Blog' },
    { href: '/projects.html', label: 'Projects' },
    { href: '/travels.html', label: 'My Travels' },
    { href: '/about.html', label: 'About Me' }
  ];

  if (nav) {
    var current = window.location.pathname;
    if (current === '/') current = '/index.html';
    var items = links.map(function (link) {
      var isCurrent = current === link.href ? ' aria-current="page"' : '';
      return '<li role="none"><a href="' + link.href + '" role="menuitem" aria-label="' + link.label + '"' + isCurrent + '>' + link.label + '</a></li>';
    }).join('');
    nav.innerHTML = '<ul role="menubar" aria-label="Main Menu">' + items + '</ul>';
  }

  if (footer) {
    footer.innerHTML =
      '<a href="mailto:furkansindar33@gmail.com" aria-label="Email me at furkansindar33@gmail.com">furkansindar33@gmail.com</a>' +
      '<a href="https://www.instagram.com/furkan_sindar/" target="_blank" rel="noopener" aria-label="Follow me on instagram">Instagram' +
      '<img src="/images/Instagram_icon.png" alt="Instagram icon"></a>' +
      '<a href="https://www.linkedin.com/in/furkan-sindar-065bb72b9/" target="_blank" rel="noopener" aria-label="Follow me on linkedin">Linkedin' +
      '<img src="/images/linkedin.png" alt="Linkedin icon"></a>';
  }
})();
