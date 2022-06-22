import React, { useRef, useState } from "react";
export const Location = (props) => {
  const[clicked ,setCliked]=useState(false)
  return (
   <div className={props.clicked?'show-location-menu Location-menu':' hide-location-menu Location-menu'}>
     <ul>
     <li><button title="location" onClick={()=>{props.optioncliked(false)}}><input type={'text'} readOnly value={'Tehran'} /></button></li>
     <li><button title="location" onClick={()=>{props.optioncliked(false)}}><input type={'text'} readOnly value={'Dubai'}/></button></li>
     <li><button title="location" onClick={()=>{props.optioncliked(false)}}><input type={'text'} readOnly value={'London'}/></button></li>
     <li><button title="location" onClick={()=>{props.optioncliked(false)}}><input type={'text'} readOnly value={'Beijing'}/></button></li>
     <li><button title="add another location">Add +...</button></li>
     <li className="hide"><button title="location"><input type={'text'} value={'none'}></input></button></li>
     </ul>
   </div>
  );
};




 /*  
   <div className="location">
      <Swiper watchSlidesProgress={true} slidesPerView={3} className="mySwiper">
        <SwiperSlide>Beijing</SwiperSlide>
        <SwiperSlide>Dubai</SwiperSlide>
        <SwiperSlide>Tehran</SwiperSlide>
        <SwiperSlide>London</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
      </Swiper>
    </div>*/