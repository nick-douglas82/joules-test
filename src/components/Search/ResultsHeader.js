import React from 'react'
import { useSelector } from 'react-redux'
import Layout from './Layout'

export default function ResultsHeader() {
  const products = useSelector(state => state.products.products);
  return (
    <header className="results-header">
      <div className="container">
        <div className="results-header__wrapper">
          <div>{products.length} products found</div>
          <Layout />
        </div>
      </div>
    </header>
  )
}
