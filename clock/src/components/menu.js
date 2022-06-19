import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'
import'../style/main.css'
export const Menu = () => {
  return (
    <div className='menu'>
         <ul>
            <li><button title='clock'><FontAwesomeIcon icon={solid('clock')} /></button></li>
            <li><button title="timer"><FontAwesomeIcon icon={solid('hourglass-empty')} /></button></li>
            <li><button title='alarm'><FontAwesomeIcon icon={solid('bullhorn')} /></button></li>
          </ul>
    </div>
  )
}
