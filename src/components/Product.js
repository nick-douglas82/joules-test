import React from 'react'

const Product = ({product}) => {
  return (
    <li className="product">
      <section className="product__image__wrapper">
        <a href="/" className="product__image__link">
          <img src={product.image} className="product__image" alt={product.title} />
        </a>
      </section>
      <section className="product__meta">
        {product.title}
      </section>
    </li>
  )
}

export default Product
