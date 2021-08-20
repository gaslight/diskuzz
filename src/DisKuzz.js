import { LitElement, html, css } from 'lit-element';
import { openWcLogo } from './open-wc-logo.js';
import LiveState from './live-state';

export class DisKuzz extends LitElement {
  static get properties() {
    return {
      url: { type: String },
      comments: { type: Array },
    };
  }

  constructor() {
    super();

  }

  addComment(event) {
    event.preventDefault();
    const textArea = this.shadowRoot.querySelector('textarea');
    const authorInput = this.shadowRoot.querySelector('input[name="author"]');
    this.dispatchEvent(new CustomEvent('addComment', {
      detail: {
        text: textArea.value,
        author: authorInput.value
      },
      bubbles: true,
      composed: true
    }));
  }

  render() {
    return html`
      <ul>
        ${this.comments && this.comments.map(comment => html`<li>${comment.text} - ${comment.author}</li>`)}
      </ul>
      <form>
        <div>
          <label>Comment</label>
          <textarea name='text'></textarea>
        </div>
        <div>
          <label>Author</label>
          <input name='author' />
        </div>
        <button @click=${this.addComment}>Add Comment</button>
      </form>
    `;
  }
}
