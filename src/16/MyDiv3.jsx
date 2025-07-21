import TailButton from "../component/TailButton"
export default function MyDiv3({n, setN}) {

  const handleUp = () => {
    setN(n + 1) ;
  }

  const handleDown = () => {
    setN(n - 1) ;
  }
  return (
    <div className="w-full h-full bg-amber-300
                    flex flex-col justify-center items-center
                    p-5 text-2xl
                    text-white font-bold">
      <div className="w-full pt-1 h-2/5 flex items-start justify-start font-bold text-xl text-white">
        MyDiv3
      </div>                
      <div className="w-8/10 h-3/5 grid grid-cols-2">
      <TailButton  caption = "증가"
                            color = "lime" 
                            onHandle = {handleUp} />
      <TailButton  caption = "감소"
                            color = "lime" 
                            onHandle = {handleDown} />
      </div>
    </div>
  )
}
