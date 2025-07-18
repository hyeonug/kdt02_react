import MyDiv3 from "./MyDiv3"
export default function MyDiv2({n, setN}) {
  return (
    <div className="w-full h-full 
                    bg-lime-500 text-white text-2xl
                    p-10 font-bold
                    flex flex-col justify-start items-center">
      <div className="w-full text-left mb-10">
        MyDiv2
      </div>
      <MyDiv3  n={n} setN={setN} />
    </div>
  )
}