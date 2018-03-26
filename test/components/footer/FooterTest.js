/* eslint-env node, mocha */
/* global expect */
/* eslint no-console: 0 */

import createComponent from 'helpers/shallowRenderHelper';
import Footer from 'components/footer/Footer.js';

describe('ProductItem', () => {
  let component;

  beforeEach(() => {
    component = createComponent(Footer);
  });

  it('should have its component name as default className', () => {
    expect(component.props.className).to.include('footer');
  });
});
