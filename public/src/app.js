class CustomElement extends HTMLElement{
    constructor() {
        super();
        this.innerText = 'Welcome to Tech Talks 2019';
    }
}

customElements.define('my-custom-element', CustomElement)