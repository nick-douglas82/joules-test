import React from 'react'

export default function NavigationList({navList, mainClass}) {
  return (
    <ul className={`${mainClass}__list`}>
      {navList.map((navListItem, index) => (
        <li className={`${mainClass}__item`} key={index}>
          <a href={navListItem.url}>{navListItem.text}</a>
        </li>
      ))}
    </ul>
  )
}
