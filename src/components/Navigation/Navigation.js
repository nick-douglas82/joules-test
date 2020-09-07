import React from 'react'
import NavigationList from './NavigationList'

export default function Navigation() {

  const navItems = [
    {
      text: 'Women',
      url: '/'
    },
    {
      text: 'Men',
      url: '/'
    },
    {
      text: 'Girls',
      url: '/'
    },
    {
      text: 'Boys',
      url: '/'
    },
    {
      text: 'Baby',
      url: '/'
    },
    {
      text: 'Home',
      url: '/'
    },
    {
      text: 'Outdoor',
      url: '/'
    },
    {
      text: 'Gifts',
      url: '/'
    },
    {
      text: 'Friends of Joules',
      url: '/'
    },
    {
      text: 'Clearance',
      url: '/'
    },
    {
      text: 'Blog',
      url: '/'
    },
    {
      text: 'Search',
      url: '/'
    },
  ]
  const mainClass = 'site-navigation'

  return (
    <nav className={mainClass}>
      <div className="container">
        <NavigationList navList={navItems} mainClass={mainClass} />
      </div>
    </nav>
  )
}
