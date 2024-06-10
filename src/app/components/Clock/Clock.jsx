import React, { useState, useEffect } from "react";
import styles from "./clock.module.css";

export default function Clock() {
  const [date, setDate] = useState(new Date());


  let interval;
  useEffect(() => {
    interval = setInterval(() => {
      tick();
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const tick = () => {
    setDate(new Date());
  };

  const format = val => {
    if (val < 10) {
      val = "0" + val;
    }
    return val;
  };
  
  const getFormmatedDate = () => {
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    return date.toLocaleDateString(undefined,options);
  }

  const getFormmatedTime = () =>{
    const hh = date.getHours();
    const minute = date.getMinutes();
    const seconds = date.getSeconds();
    const ampm = hh >= 12 ? 'PM' : 'AM'

    const hour = hh % 12 ? hh % 12 : 12
    

    return `${hour <10 ? '0'+hour : hour} : ${format(minute)} : 
    ${format(seconds)} ${ampm}`


  }

  return (
    <div className={styles.clock}>
      <div className={styles.time}>
        {getFormmatedTime()}
      </div>
      <div className={styles.date}>
        {getFormmatedDate()}
      </div>
    </div>
  );
}
