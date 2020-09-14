import React from 'react';
import { useSelector } from 'react-redux';
import Product from '../Product'

const ResultsListing = () => {
  const products = useSelector(state => state.products.products);
  const layout = useSelector(state => state.layout);
  let layoutClass = ''

  layout.forEach((layout) => {
    if (layout.active) {
      layoutClass = layout.class
    }
  })

  console.log(layoutClass)

  return (
    <div className="container">
      <ul className={`products__list ${layoutClass}`}>
        {products && products.map((product, index) => (
          <Product product={product} key={`product-${index}`} />
        ))}
      </ul>
    </div>
  )
}

export default ResultsListing
