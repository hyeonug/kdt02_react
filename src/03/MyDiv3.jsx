import { CgChevronRight } from "react-icons/cg";
export default function MyDiv3({x,y,z}) {
  return (
    <div className="w-9/10 h-4/5 bg-amber-500
                    flex justify-start
                    p-10 text-2xl
                    text-white font-bold">
      {x} 
      <CgChevronRight className="text-4xl"/> {y}
      <CgChevronRight className="text-4xl"/> {z}
    </div>
  )
}
