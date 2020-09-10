import React from 'react'
import ResultsListing from './ResultsListing';
import ResultsHeader from './ResultsHeader';

export default function Results() {
  return (
    <div className="results">
      <ResultsHeader />
      <div className="results__body">
        <ResultsListing />
      </div>
    </div>
  )
}
