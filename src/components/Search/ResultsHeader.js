import React from 'react'
import Layout from './Layout';

export default function ResultsHeader() {
  return (
    <header className="results-header">
      <div className="container">
        <div className="results-header__wrapper">
          <div>98 products found</div>
          <Layout />
        </div>
      </div>
    </header>
  )
}
