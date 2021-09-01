import React from 'react';
import PropTypes from 'prop-types';
import { Product } from './Product';
import { ProductType } from '../types/project.typedefs';

export const ProductsList = ({ products }) => (
  <ul className="ui list">
    {products.map(product => (
      <li key={product.id}>
        <Product product={product} />
      </li>
    ))}
  </ul>
);

ProductsList.propTypes = {
  products: PropTypes.arrayOf(ProductType).isRequired,
};
