class CustomElement extends HTMLElement{
    root;

    constructor() {
        super();

        const header     = document.createElement('h2');
        this.root        = this.attachShadow({mode: "closed"});
        const data       = this.getAttribute('data-title');

        header.innerText = data;
        this.root.appendChild(header);
    }

    static get observedAttributes() {
        return [ 'data-title' ];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        console.warn(`Attribute ${name} has changed from: ${oldValue} to ${newValue}`);
    }
}

customElements.define('my-custom-element', CustomElement)