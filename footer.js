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
              <a href="shim.html">Shangkoo Shim</a>
              <a href="paick.html">Ieback Paick</a>
              <a href="wills-trusts.html">Wills & Trusts</a>
              <a href="real-estate.html">Real Estate</a>
              <a href="immigration.html">Immigration</a>
              <a href="faq.html">FAQs</a>
            </div>
            <div class="footer-col">
              <!-- TODO -->
              <h5>Contact</h5>
              <p>201-224-3400</p>
              <p>272 State Rt 5</p>
              <p>Fort Lee, NJ 07024</p>
              <p>skshim.legal@gmail.com for Real Estate</p>
              <p>paicklaw@gmail.com for Immigration</p>
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