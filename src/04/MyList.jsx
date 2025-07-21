import MyListData from './MyListData.json'
import MyListItem from './MyListItem'

export default function MyList() {
  console.log(MyListData)
  return (
    <div className="w-8/10 grid grid-cols-1 xl:grid-cols-2 gap-4">
      {
        MyListData.map(item => 
          <MyListItem key={item.title}
                      title={item.title} 
                      imgUrl={item.imgUrl} 
                      content={item.content} />)
      }
    </div>
  )
}
