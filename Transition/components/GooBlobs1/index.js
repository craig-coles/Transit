import React from 'react'
import s from './GooBlobs1.module.css'

function GooBlobs1(props) {

  return (
    <svg>
      <defs>
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" stdDeviation="30" result="blur" />
          <feColorMatrix in="blur" mode="matrix" values="
             1 0 0 0 0
             0 1 0 0 0
             0 0 1 0 0
             0 0 0 50 -16
             " result="matrix" />
          <feBlend in="SourceGraphic" in2="matrix" />
        </filter>
      </defs>
    </svg>
  )

}

export default GooBlobs1;