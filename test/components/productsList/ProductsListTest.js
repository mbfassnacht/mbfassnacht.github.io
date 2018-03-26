/* eslint-env node, mocha */
/* global expect */
/* eslint no-console: 0 */

import createComponent from 'helpers/shallowRenderHelper';
import ProductsList from 'components/productsList/ProductsList.js';

describe('ProductsList', () => {
  let component;

  beforeEach(() => {
    component = createComponent(ProductsList);
  });

  it('should have its component name as default className', () => {
    expect(component.props.className).to.include('products-list');
  });
});
