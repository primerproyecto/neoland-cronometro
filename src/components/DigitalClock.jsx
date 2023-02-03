import React, { useEffect, useState } from "react";
import styles from './digitalClock.module.css'

const DigitalClock = () => {
  const [clockState, setClockState] = useState();

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setClockState(date.toLocaleTimeString());
    }, 1000);
  }, []);
  return (
    <div className={styles.wrapper}>
      <h2>{clockState}</h2>
    </div>
  );
};

export default DigitalClock;