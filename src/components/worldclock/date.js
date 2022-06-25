import React from 'react'

export const Today = () => {
  const date = new Date();
  let month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"];
  let dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  return (
    <div className='date'>{dayNames[date.getDay()]},{month[date.getMonth()]},{date.getFullYear()}</div>
  )
}
