import MyDiv2 from "./MyDiv2"
export default function MyDiv1({n, setN}) {
  return (
    <div className="w-full h-full 
                    bg-lime-700 text-white text-2xl
                    p-10 font-bold
                    flex flex-col justify-start items-center">
      <div className="w-full text-left mb-10">
        MyDiv1
      </div>
      <MyDiv2  n={n} setN={setN} />
    </div>
  )
}