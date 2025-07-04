import TailButtonLine from "../component/TailButtonLine"
import { useState } from "react"
export default function MyToggleBox({color}) {
  const [isShow, setIsShow] = useState(false) ;

  const bg700 = {
    "blue" : "bg-blue-700" ,
    "orange" : "bg-orange-700" ,
    "lime" : "bg-lime-700"
  }

  const handleShow = () => {
    setIsShow(!isShow) ;
  }

  return (
    <div className={`w-full flex flex-col justify-center items-center 
                    ${isShow && bg700[color]
                    
                    }
                    p-5`}>
      <TailButtonLine caption={color}
                      color = "gray"
                      onClick={()=>{}} />
      <TailButtonLine caption={`${color} Toggle`}
                      color = {color}
                      onClick={handleShow} />
    </div>
  )
}