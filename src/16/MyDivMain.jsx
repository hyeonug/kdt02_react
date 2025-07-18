import MyDiv1 from "./MyDiv1"
import { useState,useEffect } from "react";
export default function MyDivMain() {
    const [n,setN] = useState(0);
    const [n1,setN1] = useState(0);

    useEffect(()=>{
        setN1(n *2)
    },[n])
  return (
    <div className="w-full h-full  
                    bg-lime-900 text-white text-2xl
                    p-10 font-bold
                    flex flex-col justify-center items-center">
      <div className="w-full text-left mb-10">
        MyDivMain
        n = {n} , n2 = {n1}  
      </div>
      <MyDiv1 n={n} setN={setN} />
    </div>
  )
}
