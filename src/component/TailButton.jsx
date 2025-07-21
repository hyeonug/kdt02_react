
export default function TailButton({caption, color, onHandle}) {
  const bg = {
    "blue" : "bg-blue-800",
    "orange" : "bg-orange-800",
    "lime" : "bg-lime-800"
  }

  const bgHover = {
    "blue" : "hover:bg-blue-600",
    "orange" : "hover:bg-orange-600",
    "lime" : "hover:bg-lime-600"
  }

  return (
    <button className={`mx-2 p-4 rounded-xl text-white
                       hover:cursor-pointer hover:font-bold
                      ${bg[color]} ${bgHover[color]}`}
            onClick={onHandle}>
      {caption}
    </button>
  )
}
