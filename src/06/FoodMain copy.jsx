import FoodCard from "./FoodCard"
import fooddata from "./fooddata.json"

export default function FoodMain() {
  return (
    <div className="w-8/10 grid grid-cols-1 lg:grid-cols-2 gap-4">
      {
         fooddata.map(item => <FoodCard key={item['사업장명']}
                                        item = {item}
                                        />) 
      }
      
    </div>
  )
}
