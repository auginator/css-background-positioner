import React, { useState } from 'react'
import useMousePosition from '@react-hook/mouse-position'

const ThumbNailImage = (props) => {

  const [focus, setFocus] = useState({ top: '50%', left: '50%'})
  const [mousePosition, containerRef] = useMousePosition(
    0, // enterDelay
    0, // leaveDelay
    30 // fps
  )

  return (
    <div ref={containerRef} className="thumb-nav-image">
      <img
        src={props.src}
        alt={props.alt}
        onClick={
            event => {
              const { x, y, elementHeight, elementWidth } = mousePosition

              const xPct = `${((x / elementWidth) * 100).toFixed(3)}%`
              const yPct = `${((y / elementHeight) * 100).toFixed(3)}%`

              const cssPosition = `${xPct} ${yPct}`
              props.handleClick(cssPosition)
              setFocus({
                top: yPct,
                left: xPct
              })
            }
        }
        />
      <div className="thumb-nav-image__focus" style={focus} />
      {/* <small>Mouse Position {mousePosition.x + ', ' + mousePosition.y}</small> */}
    </div>
  )
}


export default ThumbNailImage