import { useState, useEffect,useRef } from "react"
import TailButton from "../component/TailButton"

export default function MyRef() {
  //컴포넌트 변수 
  let cnt = 0 ;
  //state 변수 
  const [stCnt, setStCnt] = useState(0) ;
  //ref 변수
  const refCnt = useRef(0) ;

  //컴포넌트 변수 증가 
  const handleCnt = () => {
    cnt = cnt + 1 ;
    console.log("cnt = ", cnt) ;
  }

  //state 변수 증가 
  const handleStCnt = () => {
    setStCnt(stCnt + 1) ;
    
  }

  //Ref 변수 증가 
  const handleRefCnt = () => {
    refCnt.current = refCnt.current + 1 ;
    console.log("refCnt=", refCnt.current);
  }

  //state변수가 변경되었을 때
  useEffect(()=>{
    console.log("stCnt = ", stCnt) ;
  }, [stCnt]);
    
    return (
        <div className="grid grid-cols-3 gap-4">
            <div className="text-orange-600">
                컴포넌트 변수 :{cnt}
            </div>
            <div className="text-blue-600">
                State 변수 :{setStCnt}
            </div>
            <div className="text-lime-600">
                Ref 변수 :{refCnt.current}
            </div>
            <div>
                <TailButton caption="컴포넌트변수"
                            color = "orange"
                            onHandle={handleCnt}/>
            </div>
             <div>
                <TailButton caption="state 변수"
                            color = "blue"
                            onHandle={handleStCnt}/>
            </div>
             <div>
                <TailButton caption="ref 변수"
                            color = "lime"
                            onHandle={handleRefCnt}/>
            </div>
        </div>
    )
}
