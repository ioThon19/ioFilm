class FooterBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <footer class="footer">
            <div class="container">
                <p class="text-dark text-center">@Anthonio Akbar</p>
            </div>
        </footer>
        `;
    }
}

customElements.define('footer-bar', FooterBar);