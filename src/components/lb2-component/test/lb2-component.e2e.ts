import { newE2EPage } from '@stencil/core/testing';

describe('lb2-component', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<lb2-component></lb2-component>');

    const element = await page.find('lb2-component');
    expect(element).toHaveClass('hydrated');
  });
});
