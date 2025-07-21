import TailButton from "../component/TailButton"

export default function TrafficNav({title, c, sel, setSel}) {
  console.log(c)
  const tag = c.map(item => <TailButton   key = {item}
                                          caption = {item}
                                          color = { item == sel ? "orange" : "blue"}
                                          onHandle = {() => setSel(item)}
                                        />) ;
  return (
    <div className="w-full flex justify-between my-5">
      <div className="text-2xl font-bold">
        교통사고 {title}
      </div>
      <div>
        {tag}
      </div>
    </div>
  )
}
