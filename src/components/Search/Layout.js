import React from 'react'

export default function Layout() {
  return (
    <div className="results__layout">
      <button className="layout__2x2">
        <div className="grid">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>
      <button className="layout__3x3 is-active">
        <div className="grid">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>
    </div>
  )
}
