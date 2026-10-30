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
    var mobileItems = links.map(function (link) {
      var active = current === link.href;
      var cls = active ? 'block px-4 py-3 rounded-lg bg-teal-700 text-white font-semibold' : 'block px-4 py-3 rounded-lg text-white hover:bg-slate-700';
      var aria = active ? ' aria-current="page"' : '';
      return '<a href="' + link.href + '" class="' + cls + '"' + aria + '>' + link.label + '</a>';
    }).join('');
    nav.className = 'w-full';
    nav.innerHTML =
      '<div class="navbar bg-slate-800 text-white shadow-lg px-4">' +
        '<div class="navbar-start"><a href="/index.html" class="btn btn-ghost text-xl normal-case text-white">Furkan Sindar</a></div>' +
        '<div class="navbar-center hidden lg:flex"><ul class="menu menu-horizontal px-1 gap-1">' + items + '</ul></div>' +
        '<div class="navbar-end lg:hidden relative">' +
          '<button class="btn btn-outline text-white js-menu-btn" aria-label="Open menu" aria-expanded="false" aria-controls="mobile-menu">Menu</button>' +
          '<div id="mobile-menu" class="hidden absolute right-0 top-full mt-2 w-56 bg-slate-800 rounded-box shadow-xl p-2 z-50">' + mobileItems + '</div>' +
        '</div>' +
      '</div>';
    // Plain JS menu, no Daisy dropdown CSS involved: the focus-based
    // dropdown kept failing on mobile Safari, so this toggles hidden/block.
    var menuBtn = nav.querySelector('.js-menu-btn');
    var mobileMenu = nav.querySelector('#mobile-menu');
    if (menuBtn && mobileMenu) {
      menuBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        var hidden = mobileMenu.classList.toggle('hidden');
        menuBtn.setAttribute('aria-expanded', hidden ? 'false' : 'true');
      });
      document.addEventListener('click', function (e) {
        if (!mobileMenu.contains(e.target) && e.target !== menuBtn) {
          mobileMenu.classList.add('hidden');
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
