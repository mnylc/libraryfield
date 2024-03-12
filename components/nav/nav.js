class Nav extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <nav class="full-page">
                <div class="row content">
                    <a href="/index.html" class="smooth-scroll"><img class="logo" src="images/library-field-logo-gray.svg" alt="library field"></a>
                    <div class="links">
                        <a href="/index.html#contact" class="smooth-scroll button">Get Involved</a>
                    </div>
                </div>
            </nav>
     `;
    }
}

customElements.define('site-nav', Nav);
