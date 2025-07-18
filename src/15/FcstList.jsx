import { useSearchParams } from "react-router-dom"
import { useState, useEffect } from "react";

import getcode from "./getcode.json";

export default function FcstList() {
  const [sparams] = useSearchParams();

  const gubun = sparams.get('gubun');
  const dt = sparams.get('dt');
  const area = sparams.get('area');
  const x = sparams.get('x');
  const y = sparams.get('y');
  const ops = getcode.filter(item => item["예보구분"] === `${gubun}예보`);
  
  const [items, setItems] = useState([]);
  const [selItem, setSelItem] = useState("");


  const filtered = items.filter((item) => item.category === selItem);

  const getDataFetch = async () => {
    const apikey = import.meta.env.VITE_DATA_API;
    let baseUrl;
    if (gubun === '초단기') {
      baseUrl = 'https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?';
    }
    else {
      baseUrl = 'https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?';
    }
    let url = `${baseUrl}serviceKey=${apikey}&pageNo=1&numOfRows=1000&dataType=json`;
    url = `${url}&base_date=${dt.replaceAll('-', '')}&base_time=${gubun === '초단기' ? '0630' : '0500'}`;
    url = `${url}&nx=${x}&ny=${y}`;
    console.log(url)
    const resp = await fetch(url);
    const data = await resp.json();
    if (data.response?.body?.items?.item) {
      setItems(data.response.body.items.item);
    }
  }

  useEffect(() => {
    getDataFetch();
  }, []);

  return (
    <div className="w-full flex flex-col items-center p-4">
     
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="text-2xl font-bold">
          {area} {gubun}예보 ({dt.replaceAll('-', '.')})
        </div>
        <select
          value={selItem}
          onChange={(e) => setSelItem(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
        >
          <option value="">-- 항목 선택 --</option>
          {ops.map(item => (
            <option key={item["항목값"]} value={item["항목값"]}>
              {`${item["항목명"]}[${item["항목값"]}]`}
            </option>
          ))}
        </select>

        
        <table className="w-full mt-5 lg:col-span-2 text-sm text-left rtl:text-center text-gray-500">
          <thead className="w-full text-md text-center font-bold text-black bg-gray-100 border-b-2">
            <tr>
              <th className="px-6 py-2">항목명</th>
              <th className="px-6 py-2">예측일자</th>
              <th className="px-6 py-2">예측시간</th>
              <th className="px-6 py-2">예측값</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((item, idx) => (
              <tr key={idx} className="bg-white border-b hover:bg-gray-50 text-center">
                
                <td>{ops.find(o => o['항목값'] === item.category)?.['항목명']}</td>
                <td>{item.fcstDate}</td>
                <td>{`${item.fcstTime.substring(0, 2)}:${item.fcstTime.substring(2, 4)}`}</td>
                <td>{item.fcstValue}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}