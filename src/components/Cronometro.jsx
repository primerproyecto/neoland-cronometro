import React, {useState, useEffect} from 'react'
import styles from './cronometro.module.css'

const Cronometro = () => {
    const [time, setTime] = useState(0);
    const [timerOn, setTimerOn] = useState(false);

    useEffect(() => {
        let interval = null;
    
        if (timerOn) {
          interval = setInterval(() => {
            setTime((prevTime) => prevTime + 10);
          }, 10);
        } else {
          clearInterval(interval);
        }
    
        return () => clearInterval(interval);
      }, [timerOn]);
  return (
    <div className={styles.wrapper}>
        <h2>{time}</h2>
        <div id="buttons">
        {!timerOn && time === 0 && (
          <button onClick={() => setTimerOn(true)}>Start</button>
        )}
        {timerOn && <button onClick={() => setTimerOn(false)}>Stop</button>}
        {!timerOn && time > 0 && (
          <button onClick={() => setTime(0)}>Reset</button>
        )}
        {!timerOn && time > 0 && (
          <button onClick={() => setTimerOn(true)}>Resume</button>
        )}
      </div>
    </div>
  )
}

export default Cronometro
