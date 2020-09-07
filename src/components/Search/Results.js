import React from 'react'
import Layout from './Layout';
import ResultsListing from './ResultsListing';

export default function Results() {
  return (
    <div className="results">
      <header className="results__header">
        <div>98 products found</div>
        <Layout />
      </header>
      <div className="results__body">
        <ResultsListing />
      </div>
    </div>
  )
}
