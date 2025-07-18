import TailButton from "../component/TailButton"
import getxy from './getxy.json'
import { useRef, useEffect } from "react"
import { useNavigate } from "react-router-dom";

export default function Fcst() {
  const dtRef = useRef();
  const areaRef = useRef();
  const area = getxy.map(item => item["1단계"]);

  const navigate = useNavigate();

  const handleLink = (gubun) => {
    // 날짜나 지역이 선택되지 않았으면 경고창을 띄우고 중단
    if (!dtRef.current.value) {
      alert('날짜를 선택하세요.');
      dtRef.current.focus();
      return;
    }
    if (!areaRef.current.value) {
      alert('지역을 선택하세요.');
      areaRef.current.focus();
      return;
    }

    let tm = getxy.find(item => item["1단계"] === areaRef.current.value);
    let x = tm["격자 X"];
    let y = tm["격자 Y"];

    let url = `/fcstlist?gubun=${gubun}&dt=${dtRef.current.value}`;
    url = `${url}&area=${areaRef.current.value}&x=${x}&y=${y}`;
    navigate(url);
  }

  useEffect(() => {
    // 오늘 날짜 설정
    let today = new Date().toISOString().split('T')[0];
    dtRef.current.value = today;
  }, []);

  return (
    <div className="w-full max-w-screen-lg mx-auto p-4">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4">
        
       
        <input type="date" id="dt"
          ref={dtRef}
          className="block w-full p-2.5 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500" />
        
      
        <select id="area"
          ref={areaRef}
          className="bg-gray-50 border w-full border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5">
          <option value=''>--- 지역선택 ---</option>
          {
            area.map(item => <option key={item} value={item}>{item}</option>)
          }
        </select>
        
    
        <div className="mt-4 flex w-full justify-center gap-4">
            <TailButton caption="초단기예보"
                color="blue"
                onHandle={() => handleLink('초단기')} />
        </div>
        <div className="mt-4 flex w-full justify-center gap-4">
            <TailButton caption="단기예보"
                color="blue"
                onHandle={() => handleLink('단기')} />
        </div>

      </div>
    </div>
  )
}