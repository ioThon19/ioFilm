class NavTab extends HTMLElement {

    connectedCallback() {
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }

    get value() {
        return this.querySelector(".nav .nav-item .nav-link.active").id;
    }

    render() {
        this.innerHTML = `
        <div class="container p-1 mt-5">
            <ul class="mt-5 nav nav-pills nav-fill justify-content-center pb-5">
                 <li class="nav-item">
                    <a class="nav-link text-white" id="trending">Trending</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-white" id="upcoming">Upcoming</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-white active" id="nowPlaying">is Being Shown</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-white" id="popular">Popular</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-white" id="topRated">Top Rated</a>
                </li>
            </ul>
        </div>  `;

        const tabItems = this.querySelectorAll(
            ".nav .nav-item .nav-link"
        );

        tabItems.forEach((tabItem) => {
            tabItem.addEventListener("click", (event) => {
                const selectedItems = this.querySelectorAll(
                    ".active"
                );

                if (selectedItems.length > 0) {
                    selectedItems[0].classList.remove("active");
                }

                event.target.classList.add("active");
                this.addEventListener("click", this._clickEvent);
            });
        });
    }

}

customElements.define('nav-tab', NavTab)