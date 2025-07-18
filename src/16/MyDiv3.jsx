import TailButton from "../component/TailButton"

export default function MyDiv3({n, setN}) {
  return (
    <div className="w-full h-full 
                        bg-lime-300 text-white text-2xl
                        p-10 font-bold
                        flex flex-col justify-center items-center">
                            MyDiv3
      <div className="w-full grid grid-cols-2 gap-4">
        
        <TailButton caption ="증가"
                     color = "blue" 
                     onClick = {()=> setN(n+1)} />
        <TailButton caption ="감소"
                     color = "blue" 
                     onClick = {()=>setN(n-1)} />
      </div> 
    </div>
  )
}