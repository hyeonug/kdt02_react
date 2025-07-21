import kind from "./kind.json"
import zcode from "./zcode.json"
import zscode from "./zscode.json"
import stat from "./stat.json"

import TailSelect from "../component/TailSelect"
import TailButton from "../component/TailButton"
import TailCard from "../component/TailCard"
import TailPageNation from "../component/TailPageNation"

import { useRef, useState, useEffect } from "react"
export default function ChargerInfo() {
  //동 지역 변수
  const [zs, SetZs]  = useState([]);
  const [tdata, setTdata] = useState([]) ;
  let totalCount = 0 ;
  const [currentPage, setCurrentPage] = useState(1) ;
  const [totalPage, setTotalPage] = useState(1) ;
  const perPage = 12 ;

  //select box ref 
  const kindRef = useRef() ;
  const zcodeRef= useRef() ;
  const zscodeRef = useRef();

  console.log(Object.keys(zcode))

  //datafetch 함수 
  const getDataFetch = async(cpage) => {
    if (zcodeRef.current.value == "") {
      alert("지역을 선택하세요.") ;
      zcodeRef.current.focus() ; 
      SetZs([]) ;
      return ;
    }

    if (zscodeRef.current.value == "" && kindRef.current.value == "") {
      alert("지역 동이나 충전소 구분을 선택하세요.") ;
      zscodeRef.current.focus()
      return ;
    }


    const apikey = import.meta.env.VITE_DATA_API ;
    const baseUrl = 'http://apis.data.go.kr/B552584/EvCharger/getChargerInfo?' ;
    let url = `${baseUrl}serviceKey=${apikey}&numOfRows=${perPage}&pageNo=${cpage}&dataType=JSON`;

    if (zcodeRef.current.value != "") {
      url = `${url}&zcode=${zcodeRef.current.value}`
    }

    if (zscodeRef.current.value != "") {
      url = `${url}&zscode=${zscodeRef.current.value}`
    }

    if (kindRef.current.value != "") {
      url = `${url}&kind=${kindRef.current.value}`
    }
    console.log(url)

    const resp = await fetch(url) ;
    const data = await resp.json() ; 

    console.log("totalCount:" , data.totalCount)
    totalCount = data.totalCount;
    setTotalPage(Math.ceil(totalCount / perPage));
    setCurrentPage(cpage)
    setTdata(data.items.item) ;
  }

  //select box handel 함수
  const handleKind = () => {
    if (zcodeRef.current.value == "") {
      alert("지역을 선택하세요.") ;
      zcodeRef.current.focus() ;
      kindRef.current.value = "" ;
      return ;
    }
    //console.log(zscodeRef.current.value)
  } 

  const handleZcode = () => {
    console.log(zcodeRef.current.value)
    SetZs(zscode[zcodeRef.current.value])
  } 

  const handleZscode = () => {
    //console.log(zscodeRef.current.value)
  } 

  //useEffect 
  
  return (
    <div className="w-full flex flex-col">
      <div className="w-full grid grid-cols-1 lg:grid-cols-4 gap-4">
        <TailSelect selRef = {zcodeRef}
                    handleSel ={handleZcode} 
                    dText = "지역 선택" 
                    opv = {Object.keys(zcode)}
                    opt = {Object.values(zcode)}  />
        <TailSelect selRef = {zscodeRef}
                    handleSel ={handleZscode} 
                    dText = "지역 동 선택" 
                    opt = {zs ? Object.keys(zs) : []}
                    opv = {zs ? Object.values(zs): []}  />
        <TailSelect selRef = {kindRef}
                    handleSel ={handleKind} 
                    dText = "충전소 구분" 
                    opv = {Object.keys(kind)}
                    opt = {Object.values(kind)}  />
        <TailButton caption = "검색"
                    color = "blue"
                    onHandle ={() => getDataFetch(1)}/>
      </div>
      <div className="w-full grid grid-1 lg:grid-cols-4 gap-4 mt-5">
        {
          tdata.map(item => <TailCard key={item.statId + item.chgerId}  
                                      title={item.statNm}
                                      subtitle={`${item.bnm}(${item.addr},${item.busiCall})`} 
                                      content ={`${item.useTime}
                                      ${stat[item.stat] == undefined ? '' : ','+ stat[item.stat] }
                                      ,주차료${item.parkingFree == 'Y'? '무료' : '유료'}
                                      ,충전방식${item.method}
                                      ,충전용량 ${item.output}kW`}
                                      />)
        }
      </div>
      <div className="w-full mt-5">
        <TailPageNation currentPage= {currentPage}
                        totalPage={totalPage} 
                        onPageChange ={getDataFetch} />
      </div>
    </div>
  )
}
