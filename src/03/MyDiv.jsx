import MyDiv2 from "./MyDiv2"
export default function MyDiv() {
  const x = "div1" ;
  const y = "div2" ;
  const z = "div3" ;

  return (
    <div className="w-2/3 h-3/5 bg-amber-900
                    flex flex-col items-center
                    p-10 text-2xl
                    text-white font-bold">
      <div className = "w-9/10 flex justify-start
                        mb-5"> 
        {x}
      </div>
      <MyDiv2 a={x} b={y} c={z} />
    </div>
  )
}
