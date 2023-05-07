class LoadingStatus extends HTMLElement {

  connectedCallback() {
      this.render();
  }

  render() {
      this.innerHTML = `
        <div class="d-flex justify-content-center">
            <div class="spinner-border text-secondary" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>`;
  }
}

customElements.define('loading-status', LoadingStatus)