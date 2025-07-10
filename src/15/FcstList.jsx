import { useSearchParams } from "react-router-dom"
import { useState, useEffect } from "react";

import getcode from "./getcode.json" ;

export default function FcstList() {
  const [sparams] = useSearchParams() ;

  const gubun = sparams.get('gubun') ;
  const dt = sparams.get('dt') ;
  const area = sparams.get('area') ;
  const x = sparams.get('x') ;
  const y = sparams.get('y') ;
  const ops = getcode.filter(item => item["예보구분"] == `${gubun}예보`) ;
  console.log(ops)

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

    console.log(url)
    // const resp = await fetch(url) ;
    // const data = await resp.json() ;
 
  }

  useEffect(()=>{
    console.log(gubun,dt, area, x, y)
     getDataFetch();
  } , []) ;
  return (
    <div  className="w-9/10 flex flex-col items-center">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="text-2xl font-bold">
          {area} {gubun}예보 ({dt.replaceAll('-','.')})  
        </div>
        <select
                className="bg-gray-50 border mx-4 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5">
          <option>-- 항목 선택 --</option>
          { ops.map(item => <option key={item["항목값"]} value={item["항목값"]}>
                              {`${item["항목명"]}[${item["항목값"]}]`}
                            </option>)}
        </select>
      </div>

    </div>
  )
}