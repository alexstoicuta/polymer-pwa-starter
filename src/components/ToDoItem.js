import { LitElement, html } from 'lit-element';

export class ToDoItem extends LitElement{
    static get properties() {
        return {
            item: { type: String }
        }
    }

    render() {
        return html`
           <div class="col-md-12">${this.item}</div> 
        `;
    }
}

customElements.define('to-do-item', ToDoItem);