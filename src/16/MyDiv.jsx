import MyDiv2 from "./MyDiv2"
export default function MyDiv({n, setN}) {

  return (
    <div className="w-9/10 h-4/5 bg-amber-700
                    flex flex-col items-center justify-center
                    p-10 text-2xl
                    text-white font-bold">
      <div className="w-full h-1/5 flex justify-start font-bold text-2xl text-white">
        MyDiv
      </div> 
      <MyDiv2  n={n} setN={setN}/>
    </div>
  )
}
