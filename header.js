class SiteHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <nav>
        <div class="nav-logo"><a href="index.html" style="color: inherit; text-decoration: none;">The Law Offices of <span>Shim &amp; Paick</span></a></div>
        <ul class="nav-links">
          <li>
            <span>About ▾</span>
            <div class="dropdown">
              <a href="shim.html">Sangkoo Shim</a>
              <a href="paick.html">Ieback Paick</a>
            </div>
          </li>
          <li>
            <span>Practice Areas ▾</span>
            <div class="dropdown">
              <a href="real-estate.html">Real Estate</a>
              <a href="immigration.html">Immigration</a>
            </div>
          </li>
          <li><a href="faq.html">FAQs</a></li>
          <li><a href="index.html#contact-section">Contact</a></li>
        </ul>
        <div class="hamburger" onclick="toggleMenu(this)">
          <span></span><span></span><span></span>
        </div>
      </nav>
    `;
  }
}

function toggleFaq(el) {
  const item = el.parentElement;
  item.classList.toggle('open');
}

customElements.define('site-header', SiteHeader);

function toggleMenu(btn) {
  document.querySelector('.nav-links').classList.toggle('mobile-open');
}

// Click-toggle for dropdown nav items
document.querySelectorAll('.nav-links > li > span').forEach(function(span) {
  span.addEventListener('click', function(e) {
    e.stopPropagation();
    const li = this.parentElement;
    const wasOpen = li.classList.contains('open');
    // close all dropdowns first
    document.querySelectorAll('.nav-links > li').forEach(l => l.classList.remove('open'));
    if (!wasOpen) li.classList.add('open');
  });
});

// Click outside to close dropdowns
document.addEventListener('click', function() {
  document.querySelectorAll('.nav-links > li').forEach(li => li.classList.remove('open'));
});

// Prevent dropdown clicks from bubbling up and closing immediately
document.querySelectorAll('.dropdown').forEach(function(dd) {
  dd.addEventListener('click', function(e) { e.stopPropagation(); });
});