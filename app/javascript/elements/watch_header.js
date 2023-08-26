import {LitElement, html} from 'lit';

class WatchHeader extends LitElement {
  render() {
    return html`
      <h1>Your Watches</h1>
    `;
  }
}

customElements.define('watch-header', WatchHeader);
