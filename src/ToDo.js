import { LitElement, html } from 'lit-element';
import './components/ToDoItem';
import {style} from './ToDo-styles.js';

export class ToDo extends LitElement {
    static get properties() {
        return {
            list: { type: Array },
            todo: { type: String }
        };
    }

    static get styles() {
        return [style];
    }

    constructor() {
        super();
        this.list = [
            this.todoItem('Clean house'),
            this.todoItem('Buy milk'),
            this.todoItem('Attend Tech Talks 2019')
        ];
        this.todo = '';
    }

    handleInput(e) {
        this.todo = e.target.value;
    }

    todoItem(todo) {
        return {todo}
    }

    createNewToDoItem() {
        this.list = [
            ...this.list,
            this.todoItem(this.todo)
        ];
        this.todo = '';
    }
    render() {
        return html`
            <div class="row">
                ${this.list.map((item, key) => {
                    return html`
                        <to-do-item item=${item.todo}></to-do-item>
                    `;
                })}
            </div>
            <div class="row">
              <input
                type="text"
                .value=${this.todo}
                @input=${this.handleInput}
              />
              <button
                type="button"
                class="btn btn-success"
                @click=${this.createNewToDoItem}
              >+</button>            
            </div>
        `;
    }
}

customElements.define('to-do', ToDo);