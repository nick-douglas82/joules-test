import React from 'react'
import NavigationList from './NavigationList'

export default function Breadcrumb() {
  const breadcrumb = [
    {
      text: 'Home',
      url: '/'
    },
    {
      text: 'Men',
      url: '/'
    },
    {
      text: 'Clothing',
      url: '/'
    },
    {
      text: 'New In',
      url: '/'
    },
  ]

  const mainClass = 'site-breadcrumb'
  return (
    <div className={mainClass}>
      <div className="container">
        <NavigationList navList={breadcrumb} mainClass={mainClass} />
      </div>
    </div>
  )
}
