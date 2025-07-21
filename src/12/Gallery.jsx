import TailSearch from "../component/TailSearch";
import TailCard from "../component/TailCard"

import { useRef, useState, useEffect } from "react"
export default function Gallery() {
  const [tdata, setTdata] = useState([]) ;
  const [tag, setTag] = useState([]);
  const kwRef = useRef() ;

  const getDataFetch = async() => {
    const apikey = import.meta.env.VITE_DATA_API ;
    const baseUrl = 'https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?' ;
    const kw = encodeURI(kwRef.current.value) ;
    const url = `${baseUrl}serviceKey=${apikey}&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A&keyword=${kw}&_type=json` ;

    const resp = await fetch(url) ;
    const data = await resp.json() ;

    setTdata(data.response.body.items.item) ;
  }

  const handleOk = (e) => {
    e.preventDefault();
    console.log(kwRef.current.value)
    getDataFetch();
  }

  const handleCancel = (e) => {
    e.preventDefault();
    kwRef.current.value = '' ;
    kwRef.current.focus();
    setTag([]);
  }

  useEffect(() => {
    if (tdata.length == 0) return ;

    console.log(tdata)
    let tm = tdata.map(item => <TailCard key={item.galContentId}
                                        imgurl = {item.galWebImageUrl}
                                        title = {item.galTitle}
                                        subtitle = {item.galPhotographyLocation}
                                        content = {item.galSearchKeyword}
                                     />);
    // console.log(tm)
    setTag(tm) ;
  } , [tdata]) ;

  return (
    <div className="w-full flex flex-col justify-start items-center">
      <div className="w-full flex justify-center
                      text-2xl font-bold">
        관광사진갤러리 키워드 검색
      </div>
      <TailSearch kwRef={kwRef} 
                     onOk = {handleOk} 
                     onCancel = {handleCancel} />

      <div className="w-8/10 mt-10
                          grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
         {tag}
      </div>
    </div>
  )
}
