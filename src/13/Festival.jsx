import { useState, useEffect, useRef } from "react"
import TailCard from "../component/TailCard";
export default function Festival() {
  const [tdata, setTdata] = useState([]);
  const [opTag, setOpTag] = useState([]);
  const [tag, setTag] = useState([]) ;
  const selRef = useRef() ;

  const handleShow = () => {
    console.log(selRef.current.value)
    let tm = tdata.filter(item => item["GUGUN_NM"] == selRef.current.value) ;
    tm = tm.map(item => <TailCard key={item.UC_SEQ}
                                            imgurl = {item.MAIN_IMG_THUMB}
                                            title = {item.MAIN_TITLE.split('(')[0]}
                                            subtitle = {item.USAGE_DAY_WEEK_AND_TIME}
                                            content = {item.MAIN_PLACE}
                                         />);
    setTag(tm)
  }

  const getDataFetch = async() => {
    const apikey = import.meta.env.VITE_DATA_API ;
    const baseUrl = 'https://apis.data.go.kr/6260000/FestivalService/getFestivalKr?' ;
    const url = `${baseUrl}serviceKey=${apikey}&pageNo=1&numOfRows=50&resultType=json`;

    const resp = await fetch(url) ;
    const data = await resp.json() ;

    setTdata(data.getFestivalKr.item) ;
  }

  useEffect(() => {
    getDataFetch();
  } , []) ;


  useEffect(() => {
    if( tdata.length == 0 ) return ;

    let tm = tdata.map(item => item["GUGUN_NM"]) ;
    tm = [...new Set(tm)].sort() ;
     
    tm = tm.map(item => <option key={item} value={item}>
                          {item}
                        </option>);
    setOpTag(tm)
  } , [tdata]) ;
  return (
    <div className="w-full flex flex-col justify-start items-center">
      <div className="w-full flex justify-center
                          text-2xl font-bold">
        부산축제정보
      </div>
      <form className="w-full flex justify-center items-center mt-10">
        <label htmlFor="area" className="block mx-5 font-bold text-lg text-gray-700">지역선택</label>
        <select id="area" 
                ref={selRef}
                onChange={handleShow}
                className="w-2/3 lg:w-1/3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5">
           <option value=''>---지역선택---</option>
           {opTag}
        </select>
      </form>
      <div className="w-8/10 mt-10
                          grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
         {tag}
      </div>
    </div>
  )
}
