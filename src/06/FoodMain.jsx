import FoodCard from "./FoodCard"
import fooddata from "./fooddata.json"
import TailButton from "../component/TailButton";
import { useState } from "react";

export default function FoodMain() { 
  const [tag, setTag] = useState([]) ;

  let group = fooddata.map(item => item["운영주체 분류"].replaceAll(' ', ''));
  group = [...new Set(group)];
  console.log(group)
  
  const handleClick = (gubun) => {
    console.log(gubun)
    let tm = fooddata.filter(item => item["운영주체 분류"].replaceAll(' ', '') == gubun )
    
    tm = tm.map(item => <FoodCard key={item['사업장명']}
                                  item={item} />)
    setTag(tm);
  }

  return (
    <div className="w-full h-full flex flex-col justify-start items-center">
      <div className="w-9/10 bg-amber-100 h-20 mb-10 p-5
                      flex justify-center items-center">
         {group.map(item => <TailButton key={item} 
                                        caption={item}
                                        color="blue" 
                                        onHandle = {() => handleClick(item)} /> )}
      </div>
      <div className="w-9/10 grid grid-cols-1 lg:grid-cols-2 gap-4 
                      overflow-y-auto">
        { tag }
      </div>
    </div>
  )
}
