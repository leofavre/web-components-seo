class CustomTag extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = '<slot></slot>';
  }
}

window.customElements.define('custom-tag', CustomTag);
