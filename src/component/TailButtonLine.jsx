
export default function TailButtonLine({caption, color, onHandle}) {
  const bg = {
    "blue" : "bg-blue-100",
    "orange" : "bg-orange-100",
    "lime" : "bg-lime-100"
  }

  const bgHover = {
    "blue" : "hover:bg-blue-600",
    "orange" : "hover:bg-orange-600",
    "lime" : "hover:bg-lime-600"
  }

  const bgBorder = {
    "blue" : "border-blue-600",
    "orange" : "border-orange-600",
    "lime" : "border-lime-600"
  }

  return (
    <button className={`mx-2 p-4 rounded-xl text-black font-bold
                        border ${bgBorder[color]}
                       hover:cursor-pointer hover:font-bold
                      ${bg[color]}`}
            onClick={onHandle}>
      {caption}
    </button>
  )
}
