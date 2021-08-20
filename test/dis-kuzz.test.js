import { html, fixture, expect, oneEvent } from '@open-wc/testing';

import '../src/dis-kuzz.js';

describe('DisKuzz', () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`<dis-kuzz></dis-kuzz>`);
  });

  it('renders comments', async () => {
    element.comments = [{author: 'Joe Bob', text: 'Great article'}];
    await element.updateComplete;
    const li = element.shadowRoot.querySelector('li');
    expect(li).to.exist;
    expect(li.textContent).to.equal('Great article - Joe Bob');
  });

  it('emits the comment submitted event', async () => {
    const textArea = element.shadowRoot.querySelector('textarea');
    textArea.value = 'this is a comment';
    const button = element.shadowRoot.querySelector('button');
    setTimeout(() => button.click());
    const { detail } = await oneEvent(element, 'addComment');
    expect(detail.text).to.equal('this is a comment');
  });

});
