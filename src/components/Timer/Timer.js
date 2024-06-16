import React,{useEffect, useState} from 'react';
import './Timer.css';

const Timer = () => {
    const [seconds,setSeconds]=useState(0);
    const [minutes,setMinutes]=useState(25);
    const [msg,setMsg]=useState("");
    const [isActive,setIsActive]=useState(false);

    useEffect(()=>{
        let interval;

        if(isActive){
            interval=setInterval(()=>{
                if(seconds===0){
                    if(minutes===0){
                        // setMinutes(25);
                        // setSeconds(0);
                        clearInterval(interval);
                        setMsg("Times up!!");
                    }
                    else{
                        setMinutes(minutes-1);
                        setSeconds(59);
                    }
                }
                else{
                    setSeconds(seconds-1); 
                }
            },1000)
        }
        else{
            clearInterval(interval);
        }

        return ()=> clearInterval(interval);
    },[isActive,minutes,seconds]);

    const toggleTimer=()=>{
        setIsActive(!isActive);
        setMsg("");
    }

    const stopTimer=()=>{
        setIsActive(false);
        setMsg("");
        setSeconds(0);
        setMinutes(25);
    }
    
    return (
      <div>
        <div className="timeShow">{minutes<10? "0"+minutes: minutes}:{seconds<10 ? "0"+seconds: seconds}</div>
        <button className='buttonComp' onClick={toggleTimer}>{isActive?'Pause':'Start'}</button>
        <button className='buttonComp' onClick={stopTimer}>Stop</button>
        <div>{msg}</div>
      </div>
    )
}

export default Timer