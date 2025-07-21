import { Link } from "react-router-dom"
export default function AppNav() {
  return (
    <div className="flex justify-center items-center">
      <Link to="/">
        <div className="p-2 m-2 font-bold hover:bg-amber-200  hover:border
                        text-amber-700 rounded bg-amber-50">
          시계
        </div>
      </Link>
      <Link to="/lotto">
        <div className="p-2 m-2 font-bold hover:bg-amber-200  hover:border
                        text-amber-700 rounded bg-amber-50">
          로또
        </div>
      </Link>
      <Link to="/food">
        <div className="p-2 m-2 font-bold hover:bg-amber-200  hover:border
                        text-amber-700 rounded bg-amber-50">
          푸드
        </div>
      </Link>
      <Link to="/box">
        <div className="p-2 m-2 font-bold hover:bg-amber-200  hover:border
                        text-amber-700 rounded bg-amber-50">
          박스오피스
        </div>
      </Link>
      <Link to="/traffic">
        <div className="p-2 m-2 font-bold hover:bg-amber-200  hover:border
                        text-amber-700 rounded bg-amber-50">
          교통사고
        </div>
      </Link>
      <Link to="/gallery">
        <div className="p-2 m-2 font-bold hover:bg-amber-200  hover:border
                        text-amber-700 rounded bg-amber-50">
          관광사진
        </div>
      </Link>
      <Link to="/festival">
        <div className="p-2 m-2 font-bold hover:bg-amber-200  hover:border
                        text-amber-700 rounded bg-amber-50">
          축제
        </div>
      </Link>
      <Link to="/fcst">
        <div className="p-2 m-2 font-bold hover:bg-amber-200  hover:border
                        text-amber-700 rounded bg-amber-50">
          일기예보 
        </div>
      </Link>
      <Link to="/mydiv">
        <div className="p-2 m-2 font-bold hover:bg-amber-200  hover:border
                        text-amber-700 rounded bg-amber-50">
          전역상태변수 
        </div>
      </Link>
      <Link to="/charger">
        <div className="p-2 m-2 font-bold hover:bg-amber-200  hover:border
                        text-amber-700 rounded bg-amber-50">
          전기차충전소 
        </div>
      </Link>
    </div>
  )
}
