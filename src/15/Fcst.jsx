import TailButton from "../component/TailButton"
import getxy from './getxy.json'
import { useRef, useEffect } from "react"
import { useNavigate } from "react-router-dom";

export default function Fcst() {
  const dtRef = useRef();
  const areaRef = useRef();
  const area = getxy.map(item => item["1단계"] ) ;
  // console.log(area)

  const navigate = useNavigate() ;

  const handleLink = (gubun) => {
    let tm = getxy.filter(item => item["1단계"] == areaRef.current.value)[0] ;
    let x = tm["격자 X"];
    let y = tm["격자 Y"]
    console.log(x, y) 
    console.log(gubun, dtRef.current.value ,areaRef.current.value)

    let url = `/fcstlist?gubun=${gubun}&dt=${dtRef.current.value}`;
    url = `${url}&area=${areaRef.current.value}&x=${x}&y=${y}` ;
    navigate(url) ;
  }

  useEffect(() => {
    //오늘 날짜 
    let today = new Date().toISOString().split('T')[0] ;
    dtRef.current.value = today ;
    console.log(today)
  } , []) ;

  return (
    <div className="w-9/10 grid grid-cols-1 lg:grid-cols-2 gap-4">
      <input type="date" id="dt"
        ref={dtRef}
        className="block p-1 mx-4 text-gray-900 
                              border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500" />
    
      <select id="area" 
                ref={areaRef} 
                className="bg-gray-50 border mx-4 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5">
           <option value=''>---지역선택---</option>
           {
            area.map(item => <option key={item} value={item}>{item}</option>)
           }
        </select>
        <TailButton caption="초단기예보"
                color="blue"
                onHandle={() => handleLink('초단기')} />
        <TailButton caption="단기예보"
                color="blue"
                onHandle={() => handleLink('단기')} />
    </div>
  )
}
