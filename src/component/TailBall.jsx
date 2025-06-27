export default function TailBall({n}) {
  const bg = {
    "n0" : "bg-red-200",
    "n1" : "bg-amber-200",
    "n2" : "bg-lime-200",
    "n3" : "bg-sky-200",
    "n4" : "bg-purple-200",
}
  return (
    <div className={`w-16 h-16 ${bg["n"+ Math.floor(n / 10)]}
                    flex justify-center items-center
                    p-10 rounded-full mr-5
                    text-4xl text-white font-bold`}>
      {n}
    </div>
  )
}