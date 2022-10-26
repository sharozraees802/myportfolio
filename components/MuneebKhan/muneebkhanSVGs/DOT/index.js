import React from 'react'

const DOT = props => {
  return (
    <svg {...props} version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" width="1000" height="1000">
    <title>DOT</title>
    {/* <defs>
      <image  width="1000" height="1000" id="img1" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA+gAAAPoAQMAAAB3bUanAAAAAXNSR0IB2cksfwAAAANQTFRF////p8QbyAAAAJFJREFUeJztwTEBAAAAwqD1T20KP6AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAL4G7D8AAfgxlyEAAAAASUVORK5CYII="/>
    </defs> */}
    {/* <style>
      .s0 { fill: #000000;stroke: #000000 } 
    </style> */}
    <use id="Background" href="#img1" x="0" y="0"/>
    <g id="Folder 1">
      <path id="Shape 7" fillRule="evenodd" className="s0" d="m319.4 490.8c4.1 1.9 7.5 10.8 4.4 15-2.9 3.8-10.4 4.5-14.3 2-2.8-1.9-3-5.5-3-8.5 0-2.3 9.6-10 12.9-8.5z"/>
    </g>
  </svg>
  )
}

DOT.propTypes = {}

export default DOT