import MyDiv3 from "./MyDiv3"
import { useAtom } from "jotai"
import { cntAtom } from "./CntAtom"
export default function MyDiv2() {
  const [cnt] = useAtom(cntAtom) ;

  return (
    <div className="w-full h-4/5 bg-amber-500
                    flex flex-col items-center justify-center
                    p-5 text-2xl
                    text-white font-bold">
      <div className="w-full pt-1 h-1/5 flex justify-start font-bold text-2xl text-white">
        MyDiv2 n={cnt}
      </div> 
      <MyDiv3/>
    </div>
  )
}
