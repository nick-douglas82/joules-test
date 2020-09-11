import React from 'react';
import { useSelector } from 'react-redux';
import Product from '../Product'

const ResultsListing = () => {
  const products = useSelector(state => state.products.products);

  return (
    <div className="container">
      <ul className="products__list">
        {products && products.map((product, index) => (
          <Product product={product} key={`product-${index}`} />
        ))}
      </ul>
    </div>
  )
}

export default ResultsListing
