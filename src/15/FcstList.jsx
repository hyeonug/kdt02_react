import { useSearchParams } from "react-router-dom"
import { useState, useEffect  } from "react";

import getcode from "./getcode.json" ;

export default function FcstList() {
  const [sparams] = useSearchParams() ;
  const [tdata, setTdata] = useState([]) ;
  const [tag, setTag] = useState([]) ;

  const gubun = sparams.get('gubun') ;
  const dt = sparams.get('dt') ;
  const area = sparams.get('area') ;
  const x = sparams.get('x') ;
  const y = sparams.get('y') ;
  const ops = getcode.filter(item => item["예보구분"] == `${gubun}예보`) ;
  

  const handleShow = (e) => {
    const unitItem = getcode.filter(item => item["예보구분"] == `${gubun}예보` &&
                                      item["항목값"] == e.target.value )[0];
    console.log(unitItem)
    const unit = unitItem["단위"] ;
    const skyUnit = {
      "1" : "맑음(☀️)", 
      "3" : "구름많음(☁️)", 
      "4" : "흐림(🌥️)"
    }   
    const ptyUnit = {
      "0" : "없음(0)", 
      "1" : "비(☂️)", 
      "2" : "비/눈(☂️/🌨️)", 
      "3" : "눈(❄️)",
      "4" : "소나기(🌧️)" , 
      "5" : "빗방울(☔)", 
      "6" : "빗방울눈날림(🌨️)", 
      "7" : "눈날림(🌨️)" ,
    }   
    
    console.log(e.target.value, tdata)
    let tm = tdata.filter(item => item["category"] == e.target.value )
    console.log(tm)

    tm = tm.map(item => <tr key={item.baseDate + item.baseTime} 
        className="bg-white border-b border-gray-200
                             hover:bg-gray-100 hover:text-blue-700 hover:cursor-pointer">
        <th scope="row" className="1/4  text-center px-3 py-3 font-medium text-gray-900 whitespace-nowrap">
          {/* {unitItem["항목명"]}({unitItem["항목값"]}) */}
          {`${unitItem["항목명"]}(${unitItem["항목값"]}) `}
        </th>
        <td className="1/4 px-3 py-3 text-center">
          {item.fcstDate}
        </td>
        <td className="1/4 px-3 py-3 text-center">
          {item.fcstTime}
        </td>
        <td className="1/4 px-3 py-3 text-center">
          {unitItem["항목값"] == "SKY" ? skyUnit[item.fcstValue]
            : unitItem["항목값"] == "PTY" ? ptyUnit[item.fcstValue]
            : unitItem["항목값"] == "RN1" && item.fcstValue == "강수없음" ?item.fcstValue
            : `${item.fcstValue}${unit}`

            }

        </td> 
      </tr>);
    
    setTag(tm) ;
  }

  const getDataFetch = async() => {
    const apikey = import.meta.env.VITE_DATA_API ;
    let baseUrl ;
    if (gubun == '초단기') {
      baseUrl = 'https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?';
    }
    else {
      baseUrl = 'https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?';
    }
    let url = `${baseUrl}serviceKey=${apikey}&pageNo=1&numOfRows=1000&dataType=json`;
    url = `${url}&base_date=${dt.replaceAll('-','')}&base_time=${gubun == '초단기'? '0630' : '0500'}`;
    url = `${url}&nx=${x}&ny=${y}` ;

    
    const resp = await fetch(url) ;
    const data = await resp.json() ;
    setTdata(data.response.body.items.item)
  }

  useEffect(()=>{
    console.log(gubun,dt, area, x, y)
    getDataFetch();
  } , []) ;
  return (
    <div  className="w-9/10 flex flex-col items-center">
      <div className="w-8/10  grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="text-2xl font-bold">
          {area} {gubun}예보 ({dt.replaceAll('-','.')})  
        </div>
        <select onChange={handleShow}
                className="bg-gray-50 border mx-4 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5">
          <option>-- 항목 선택 --</option>
          { ops.map(item => <option key={item["항목값"]} value={item["항목값"]}>
                              {`${item["항목명"]}[${item["항목값"]}]`}
                            </option>)}
        </select>
      </div>
      <table className="w-8/10 mt-10 text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase
                            bg-gray-50 border-b-2 border-gray-900">
            <tr>
              <th scope="col" className="w-1/4 px-3 py-3  text-center">
                항목명
              </th>
              <th scope="col" className="w-1/4 px-3 py-3  text-center">
                예측일
              </th>
              <th scope="col" className="w-1/4 px-3 py-3 text-center">
                예측시간
              </th>
              <th scope="col" className="w-1/4 px-3 py- text-center">
                예측값
              </th>              
            </tr>
          </thead>
          <tbody>
             {tag}
          </tbody>
      </table>
          
    </div>
  )
}
