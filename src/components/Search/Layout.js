import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { changeLayout } from "../../store/layout/actions/layout"
import Layout__2x2 from "./layouts/Layout__2x2"
import Layout__3x3 from "./layouts/Layout__3x3"

export default function Layout() {
  const layout = useSelector(state => state.layout);
  const dispatch = useDispatch();

  const Components = {
    twowide: Layout__2x2,
    threewide: Layout__3x3
  };

  return (
    <div className="results__layout">
      {layout && layout.map((layout, index) => (
        <button
          className={`${layout.class} ${layout.active ? 'is-active' : ''}`}
          onClick={() => dispatch(changeLayout(layout.id))}
          key={`layout__${index}`}
        >
          { React.createElement(Components[layout.type], {
            key: layout.id,
          }) }
        </button>
      ))}
    </div>
  )
}
