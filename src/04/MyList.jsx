import MyListItem from "./MyListItem"
import MyListData from "./MyListData.json"
export default function MyList() {
  let show = true ;
  let tags = MyListData.map( item => <MyListItem 
                                      key={item.title}
                                      title={item.title} 
                                      imgUrl={item.imgUrl} 
                                      content={item.content}
                                      show={show} />) ;
  
  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4 px-10 lg:px-2">
       {tags}
    </div>
  )
}