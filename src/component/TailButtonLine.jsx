
export default function TailButtonLine({caption, color, onClick}) {
  const border400 = {
    "blue" : "border-blue-400",
    "orange" : "border-orange-400",
    "lime" : "border-lime-400",
    "gray" : "border-gray-400",
  }
  const bg100 = {
    "blue" : "bg-blue-100" ,
    "orange" : "bg-orange-100" ,
    "lime" : "border-lime-100",
    "gray" : "bg-white",
  }

  const bgHover = {
    "blue" : "hover:bg-blue-400" ,
    "orange" : "hover:bg-orange-400" ,
    "lime" : "hover:bg-lime-400",
    "gray" : "",
  }
  return (
    <button className={`border ${border400[color]} rounded-md
                        text-lg font-bold p-5 m-2
                        ${bg100[color]} ${bgHover[color]}
                        ${color !== "gray" && "hover:text-white"}`}
            onClick={onClick}>
      {caption}
    </button>
  )
}