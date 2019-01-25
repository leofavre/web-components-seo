class CustomTag extends HTMLElement {
  static get observedAttributes() {
    return ['content'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  get content() {
    return this.getAttribute('content');
  }

  set content(value) {
    this.setAttribute('content', value);
  }

  attributeChangedCallback(type, oldValue, newValue) {
    this.shadowRoot.innerHTML = `
      <h1>${newValue}</h1>
      <p>${newValue}</p>
    `;
  }
}

window.customElements.define('custom-tag', CustomTag);

const tag = document.querySelector('custom-tag');
tag.content = `Will this be indexed?`;
