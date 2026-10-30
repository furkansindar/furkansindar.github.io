/* Shared site components: navigation and footer, now DaisyUI.
   Every page includes this file once, so the nav and footer
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
      var active = current === link.href;
      var cls = active ? 'btn btn-primary' : 'btn btn-ghost text-white';
      var aria = active ? ' aria-current="page"' : '';
      return '<li><a href="' + link.href + '" class="' + cls + '"' + aria + '>' + link.label + '</a></li>';
    }).join('');
    nav.className = 'w-full';
    nav.innerHTML =
      '<div class="navbar bg-slate-800 text-white shadow-lg px-4">' +
        '<div class="navbar-start"><a href="/index.html" class="btn btn-ghost text-xl normal-case text-white">Furkan Sindar</a></div>' +
        '<div class="navbar-center hidden lg:flex"><ul class="menu menu-horizontal px-1 gap-1">' + items + '</ul></div>' +
        '<div class="navbar-end lg:hidden">' +
          '<div class="dropdown dropdown-end">' +
            '<button class="btn btn-outline text-white js-menu-btn" aria-label="Open menu" aria-expanded="false">Menu</button>' +
            '<ul tabindex="0" class="menu menu-sm dropdown-content bg-slate-800 rounded-box z-10 mt-3 w-52 p-2 shadow gap-1">' + items + '</ul>' +
          '</div>' +
        '</div>' +
      '</div>';
    // Touch-friendly menu: Daisy dropdowns rely on focus, which is flaky on
    // mobile Safari, so toggle it with a real click handler instead.
    var menuBtn = nav.querySelector('.js-menu-btn');
    var dropdown = nav.querySelector('.dropdown');
    if (menuBtn && dropdown) {
      menuBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        var open = dropdown.classList.toggle('dropdown-open');
        menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
      });
      dropdown.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
          dropdown.classList.remove('dropdown-open');
          menuBtn.setAttribute('aria-expanded', 'false');
        });
      });
      document.addEventListener('click', function (e) {
        if (!dropdown.contains(e.target)) {
          dropdown.classList.remove('dropdown-open');
          menuBtn.setAttribute('aria-expanded', 'false');
        }
      });
    }
  }

  if (footer) {
    footer.className = 'footer bg-slate-800 text-white items-center p-6 mt-12 justify-center gap-4';
    footer.innerHTML =
      '<a href="mailto:furkansindar33@gmail.com" class="link link-hover text-white">furkansindar33@gmail.com</a>' +
      '<a href="https://www.instagram.com/furkan_sindar/" target="_blank" rel="noopener" class="link link-hover text-white inline-flex items-center gap-2">Instagram' +
      '<img src="/images/Instagram_icon.png" alt="Instagram icon" width="20" height="20"></a>' +
      '<a href="https://www.linkedin.com/in/furkan-sindar-065bb72b9/" target="_blank" rel="noopener" class="link link-hover text-white inline-flex items-center gap-2">Linkedin' +
      '<img src="/images/linkedin.png" alt="Linkedin icon" width="20" height="20"></a>' +
      '<a href="https://github.com/furkansindar" target="_blank" rel="noopener" class="link link-hover text-white">GitHub</a>';
  }
})();
