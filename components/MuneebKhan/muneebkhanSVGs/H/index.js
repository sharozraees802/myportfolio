import React from 'react'

const H = props => {
  return (
    <svg {...props} version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" width="1000" height="1000">
    <title>H</title>
    {/* <defs>
      <image  width="1000" height="1000" id="img1" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA+gAAAPoAQMAAAB3bUanAAAAAXNSR0IB2cksfwAAAANQTFRF////p8QbyAAAAJFJREFUeJztwTEBAAAAwqD1T20KP6AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAL4G7D8AAfgxlyEAAAAASUVORK5CYII="/>
    </defs> */}
    {/* <style>
      .s0 { fill: #000000;stroke: #000000 } 
    </style> */}
    <use id="Background" href="#img1" x="0" y="0"/>
    <g id="Folder 1">
      <path id="Shape 3" className="s0" d="m428 451c0 0 17-12.9 17 11 2 0.9-2 20-2 20l10-2 3-16c0 0-3.3-14.2 9-14 0.3 0.5 20.5-2.7 17 13 0.5 0-12.5 81.5-21 255-0.5 0.5-10 32-10 32 0 0-1.5-231 2-242-0.5 1-13-1-13-1l-8 21-12 4z"/>
    </g>
  </svg>
  )
}

H.propTypes = {}

export default H