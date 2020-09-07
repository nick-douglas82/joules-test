import React from 'react'
import Breadcrumb from './Navigation/Breadcrumb';
import TextContent from './TextContent';
import Search from './Search/Search';

export default function Content() {

  const title = "New In Men’s Clothing"

  const text = "The new season brings with it a new collection. For men looking for new in clothing pieces that are rugged, handsome, and stylish, the hunt is over. Our classic pieces of quality clothing are here to help you stand out from the crowd. With everything you need for the season ahead, here you’ll find something you want to wear over and over again. For those finishing touches to your outfit be sure to check out our men’s new in footwear and accessories."

  return (
    <main>
      <Breadcrumb />
      <TextContent title={title} text={text} visibleCharacters={250} expandable={true} expanded={false} />
      <Search />
    </main>
  )
}
