/* eslint-env node, mocha */
/* global expect */
/* eslint no-console: 0 */

import createComponent from 'helpers/shallowRenderHelper';
import ProductItem from 'components/productItem/ProductItem.js';

describe('ProductItem', () => {
  let component;

  var mock = {
      name: 'auto',
      prize: '32131',
      location: 'Pocitos - Montevideo',
      images: [{title: 'main', src: 'images/object.png'}]
  };

  beforeEach(() => {
    component = createComponent(ProductItem, {content:mock});
  });

  it('should have its component name as default className', () => {
    expect(component.props.className).to.include('product-item');
  });
});
