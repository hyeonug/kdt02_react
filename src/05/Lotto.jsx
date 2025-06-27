import TailBall from '../component/TailBall'
import TailButton from '../component/TailButton'
import { useState } from "react"

export default function Lotto() {
  const [lottoTags, setLottoTags] = useState([]);

  const handleLottoNum = () => {
    let lottoNum = [];

    while (lottoNum.length < 7) {
      let n = Math.floor(Math.random() * 45) + 1;


      if (!lottoNum.includes(n)) lottoNum.push(n);
    }


    let bonus = lottoNum.splice(-1);


    lottoNum.sort((a, b) => a - b);


    lottoNum = [...lottoNum, '+', ...bonus];


    let tm = lottoNum.map(item => item === '+' ? <span  key={'n' + item} className="w-16 h-16 text-4xl font-bold mr-5
                                                                  flex justify-center items-center ">
      {item}
    </span>
      : <TailBall key={'n' + item} n={item} />
    );
    setLottoTags(tm);
    console.log("lottoNum", lottoNum);
  }

  return (
    <div className="w-11/12 h-full flex flex-col justify-center items-center">
      <div className="w-full flex justify-center items-center mb-10">
        {lottoTags}
      </div>
      <div>
        <TailButton caption="로또번호생성" color="blue" onClick={handleLottoNum} />
      </div>
    </div>
  )
}