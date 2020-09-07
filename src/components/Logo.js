import React from 'react'
import JoulesLogo from '../assets/images/joules.png'

export default function Logo() {
  return (
    <div className="container">
      <img src={JoulesLogo} alt="logo" className="mx-auto d-block" />
    </div>
  )
}
