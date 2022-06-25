import React, { useState } from "react";
export const Clock = () => {
  const [Time, setTime] = useState({
    date: new Date(),
    hour() {
      return this.date.getHours();
    },
    min() {
      return this.date.getMinutes();
    },
    sec() {
      return this.date.getSeconds();
    },
  });
  
  setInterval(UpdateTime);

  function UpdateTime() {
    setTime((prevState) => ({
      date: new Date(),
      hour() {
        return this.date.getHours();
      },
      min() {
        return this.date.getMinutes();
      },
      sec() {
        return this.date.getSeconds();
      },
    }));
  }
  const hourstyle = {
    transform: `rotateZ(${Time.hour() * 30 + Time.min() / 12}deg)`,
  };
  const minstyle = {
    transform: `rotateZ(${Time.min() * 6}deg)`,
  };
  const secstyle = {
    transform: `rotateZ(${Time.sec() * 6}deg)`,
  };

  return (
    <div className="clock-container">
      <div className="clock"></div>
      <div className="hour" style={hourstyle}></div>
      <div className="min" style={minstyle}></div>
      <div className="sec" style={secstyle}></div>
    </div>
  );
};
