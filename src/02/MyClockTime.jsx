import { useState, useEffect } from "react"

export default function MyClockTime() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(()=>{
   const tm = setInterval(()=>{
     setCurrentTime(new Date);
    } , 1000) ;
   
    return(()=>{
      clearInterval(tm) ;
    }) ;

  }, []);
  return (
    <div className="text-2xl font-bold">  
      현재 시각 : {currentTime.toLocaleTimeString()}
    </div>
  )
}
