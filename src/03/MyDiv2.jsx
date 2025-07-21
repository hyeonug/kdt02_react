import MyDiv3 from "./MyDiv3"
import { CgChevronRight } from "react-icons/cg";

export default function MyDiv2(props) {
  return (
    <div className="w-9/10 h-4/5 bg-amber-700
                    flex flex-col items-center
                    p-10 text-2xl
                    text-white font-bold">
      <div className = "w-9/10 flex justify-start
                        mb-5"> 
        {props.a} <CgChevronRight className="text-4xl"/> {props.b}
      </div>
      <MyDiv3 x={props.a} y={props.b} z={props.c} />
    </div>
  )
}
