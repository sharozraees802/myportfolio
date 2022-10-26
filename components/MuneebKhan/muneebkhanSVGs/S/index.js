import React from 'react'
import PropTypes from 'prop-types'
// import Image from 'next/image'


const S = props => {
  return (
    <svg {...props} version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" width="1000" height="1000">
    <title>S</title>
    {/* <defs>
      <image  width="1000" height="1000" id="img1" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA+gAAAPoAQMAAAB3bUanAAAAAXNSR0IB2cksfwAAAANQTFRF////p8QbyAAAAJFJREFUeJztwTEBAAAAwqD1T20KP6AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAL4G7D8AAfgxlyEAAAAASUVORK5CYII="/>
    </defs> */}
    {/* <style>
      .s0 { fill: #000000;stroke: #000000 } 
    </style> */}
    <use id="Background" href="#img1" x="0" y="0"/>
    <g id="Folder 1">
      <path id="Shape 2" className="s0" d="m446 354l-40 61h-36l-26 38 65-10-4 103c0 0-142 8.9-341 123 0 0.9 43-60.9 267-132 0 2.9 52-14.9 49-43-3-28.1-49-17.9-61-16 1-0.1 22-80 22-80z"/>
    </g>
  </svg>
  )
}


export default S