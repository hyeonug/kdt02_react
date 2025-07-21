import MyDiv from "./MyDiv"
// import { useState, useEffect} from "react"
import { useAtom } from "jotai";
import { cntAtom, cntAtom2} from "./CntAtom" ;

export default function MyDivMain() {
  const [ n ] = useAtom(cntAtom) ;
  const [ n2 ] = useAtom(cntAtom2) ;

  return (
    <div className="w-2/3 h-4/5 bg-amber-900
                    flex flex-col items-center justify-center
                    p-5 text-2xl
                    text-white font-bold">
      <div className="w-full flex justify-start p-5">
      n={n}, n2={n2}
      </div>
      <MyDiv />
    </div>
  )
}
