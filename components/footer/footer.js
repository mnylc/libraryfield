class Footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer>
            <section class="page content">
                <section class="logos row">
                    <img class="logo" src="images/library-field-logo-white.svg" alt="Libary Field logo">
                    <a href="https://metro.org/" target="_blank">
                        <img class="logo" src="images/metro-logo-white.png" alt="METRO logo">
                    </a>
                </section>
                <p class="footer-tagline">
                    Library Field is a project of 
                    <a href="https://metro.org/" target="_blank">Metropolitan New York Library Council</a>
                </p>
                <div class="button-container row">
                    <a href="mailto:libraryfield@metro.org"><button class="white">Contact</button></a>
                    <a href="https://metro.us9.list-manage.com/subscribe?u=55e01f49515c93ceeb6d00bb4&id=e21fe69412" target="_blank"><button class="white">Newsletter</button></a>                </div>
            </section>
        </footer>
     `;
    }
}

customElements.define('site-footer', Footer);
