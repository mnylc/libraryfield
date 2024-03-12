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
                <p>
                    Library Field is a project of 
                    <a href="https://metro.org/" target="_blank">Metropolitan New York Library Council</a>
                </p>
                <div class="button-container row">
                    <a href="mailto:libraryfield@metro.org"><button class="white">Reach Out</button></a>
                </div>
            </section>
        </footer>
     `;
    }
}

customElements.define('site-footer', Footer);
