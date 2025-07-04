import { useState, useEffect } from "react"
import TrafficNav from "./TrafficNav";
export default function Traffic() {
  const [tdata, setTdata] = useState([]);

  
  const [c1, setC1] = useState();
  const [selC1, setSelC1] = useState();

  
  const [c2, setC2] = useState();
  const [selC2, setSelC2] = useState();


  const [info, setInfo] = useState();

  const getFetchData = async () => {
    const apikey = import.meta.env.VITE_TR_API;
    const baseUrl = 'https://api.odcloud.kr/api/15070282/v1/uddi:8449c5d7-8be5-4712-9093-968fc0b2d9fc?'
    const url = `${baseUrl}page=1&perPage=18&serviceKey=${apikey}`
    console.log(url)

    const resp = await fetch(url);
    const data = await resp.json();

    setTdata(data.data);
  }
  useEffect(() => {
    getFetchData();
  }, []);

  useEffect(() => {
    if (tdata.length == 0) return;

    let tm = tdata.map(item => item["사고유형대분류"]);

    tm = [...new Set(tm)];

    setC1(tm);
    console.log(tm)
  }, [tdata])
   useEffect(() => {
    
    setC2([]) ;
    setSelC2('') ;
    setInfo('');

     
    let tm = tdata.filter(item => item["사고유형대분류"] == selC1)
      .map(item => item["사고유형"]);
    
    tm = [...new Set(tm)];
    

    setC2(tm);
  }, [selC1]);

  useEffect(() => {
    if ( !selC1 || !selC2 ) return ;

    let tm = tdata.filter(item => item["사고유형대분류"] == selC1
                                  && item["사고유형"] == selC2);
    tm = tm[0];
 
    let infoKey = ["사고건수", "사망자수", "중상자수", "경상자수", "부상신고자수"];
    tm = infoKey.map(item => <div key={item} className="w-1/5 my-3 flex "> 
                              <span className="w-3/5 bg-lime-800 text-white font-bold
                                               inline-flex justify-center items-center
                                               p-1 text-center">
                                {item}
                              </span> 
                              <span className="w-2/5 text-lime-800 font-bold
                                               inline-flex justify-center items-center
                                               p-1 text-center">
                                {parseInt(tm[item]).toLocaleString()}
                              </span>
                             </div>)
   
    
    setInfo(tm) ;
  }, [selC2]);

  return (
    <div className="w-full flex flex-col justify-center items-center">
      {c1 && <TrafficNav title="대분류"
        ct={c1}
        selc={selC1}
        setSelC={setSelC1} />}

      {c2 && <TrafficNav title="사고유형"
        ct={c2}
        selc={selC2}
        setSelC={setSelC2} />}

      <div className="w-11/12 flex justify-center items-center bg-lime-100">
        {info}
      </div>
    </div>
  )
}