import { newSpecPage } from '@stencil/core/testing';
import { Lb2Component } from '../lb2-component';

describe('lb2-component', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Lb2Component],
      html: `<lb2-component></lb2-component>`,
    });
    expect(page.root).toEqualHtml(`
      <lb2-component>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </lb2-component>
    `);
  });
});
