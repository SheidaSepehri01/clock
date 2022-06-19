import React ,{useState,useEffect} from 'react'
import { Location } from './location'
import { Clock } from './clock'
import { Date } from './date'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 
export const WorldClock = () => {
  const [clicked ,setCliked]=useState(false);
  function ChildToParent(data){
    setCliked(data)
  }
  function ParentToChild(data){
    return data
   }
  return (
    <div className='world-clock'>
    <input type='text'value={'dubai'} className='current-location' />
   <button title='change location' className={clicked?'chose-location rotate':'chose-location'} onClick={()=>{clicked ? setCliked(false):setCliked(true)}}><FontAwesomeIcon icon={solid("location-dot")} /></button>
    <Location clicked={ParentToChild(clicked)} optioncliked={ChildToParent}/>
    <Clock />
    <Date />
    </div>
  )
}
