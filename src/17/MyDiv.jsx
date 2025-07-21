import MyDiv2 from "./MyDiv2"
import { useAtom } from "jotai"
import { cntAtom2 } from "./CntAtom"
export default function MyDiv() {
  const [cnt2] = useAtom(cntAtom2) ;
  return (
    <div className="w-9/10 h-4/5 bg-amber-700
                    flex flex-col items-center justify-center
                    p-10 text-2xl
                    text-white font-bold">
      <div className="w-full h-1/5 flex justify-start font-bold text-2xl text-white">
        MyDiv n2= {cnt2}
      </div> 
      <MyDiv2 />
    </div>
  )
}
