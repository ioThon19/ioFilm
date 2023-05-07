class LayTab extends HTMLElement {

    connectedCallback() {
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }

    get value() {
        return this.querySelector("#searchBox").value;
    }

    render() {
        this.innerHTML = `
        <nav class="navbar navbar-light">
            <div class="container-fluid mt-3">
                <a class="navbar-brand" href="#"><h1><b class="text-primary"></b>ioFilm</h1></a>
                <div class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search Movie" id="searchBox">
                    <button class="btn btn-outline-secondary" type="submit" id="searchButton">Search</button>
                </div>
            </div>
        </nav>`;

        this.querySelector("#searchButton").addEventListener("click", this._clickEvent);
    }

}

customElements.define('header-bar', LayTab)