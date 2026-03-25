class SiteFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer>
        <div class="container">
          <div class="footer-inner">
            <div>
              <div class="footer-brand">The Law Office of <span>Shim &amp; Paick</span></div>
              <p class="footer-tagline">Serving clients in immigration and real estate law for over two decades. <!-- TODO --> Offices in New Jersey and Queens.</p>
            </div>
            <div class="footer-col">
              <h5>Navigation</h5>
              <a href="shim.html">Sangkoo Shim</a>
              <a href="paick.html">Ieback Paick</a>
              <a href="real-estate.html">Real Estate</a>
              <a href="immigration.html">Immigration</a>
              <a href="faq.html">FAQs</a>
            </div>
            <div class="footer-col">
              <!-- TODO -->
              <h5>Contact</h5>
              <p>XXX-XXX-XXXX</p>
              <p>Addr1</p>
              <p>City, State XXXXX</p>
              <p style="margin-top:10px">Addr2</p>
              <p>City, State XXXXX</p>
            </div>
          </div>
          <div class="footer-bottom">
            <p>© The Law Office of Shim &amp; Paick. All Rights Reserved. Attorney Advertising. This website is for general information only and does not constitute legal advice or create an attorney-client relationship.</p>
          </div>
        </div>
      </footer>
    `;
  }
}
customElements.define('site-footer', SiteFooter);