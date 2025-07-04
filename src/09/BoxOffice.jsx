
import { useState, useEffect, useRef } from "react"


export default function BoxOffice() {

  const [tags, setTags] = useState([]);
  const [info, setInfo] = useState('');
  const [dt, setDt] = useState();


  const refDt = useRef();


  const getYesterday = () => {
    let dt = new Date();
    dt.setDate(dt.getDate() - 1);


    let year = dt.getFullYear();


    let month = String(dt.getMonth() + 1).padStart(2, '0');



    let day = String(dt.getDate()).padStart(2, '0');

    return (year + '-' + month + '-' + day);
  }


  const handleShow = (item) => {

    setInfo(`[${item.rankOldAndNew}](${item.movieCd}) ${item.movieNm} 
              상영스크린수 ${item.scrnCnt}, 상영횟수 ${item.showCnt}`);
  }


  const handleChange = () => {
    setInfo('');
    setDt(refDt.current.value);
  }


  const getFetchData = async () => {
    const mvApiKey = import.meta.env.VITE_MV_API;
    let tmdt = dt.replaceAll('-', '');

    let url = `https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?`;
    url = `${url}key=${mvApiKey}&targetDt=${tmdt}`;


    const resp = await fetch(url);
    const data = await resp.json();

    let boxList = data.boxOfficeResult.dailyBoxOfficeList;


    let tm = boxList.map(item => <tr key={item.movieCd}
      onClick={() => handleShow(item)}
      className="bg-white border-b border-gray-200
                                                 hover:bg-gray-50 hover:cursor-pointer hover:text-blue-800">
      <td className="w-4 p-3 text-center">
        {item.rank}
      </td>
      <td scope="row" className="px-2 py-3">
        {item.movieNm}
      </td>
      <td className="px-2 py-3 text-right">
        {parseInt(item.salesAmt).toLocaleString()}
      </td>
      <td className="px-2 py-3 text-right">
        {parseInt(item.audiCnt).toLocaleString()}
      </td>
      <td className="px-2 py-3 text-right">
        {parseInt(item.salesAcc).toLocaleString()}
      </td>
      <td className="px-2 py-3 text-right">
        {parseInt(item.audiAcc).toLocaleString()}
      </td>
      <td className="px-2 py-3 text-right">
        {parseInt(item.showCnt).toLocaleString()}

      </td>
      <td className="px-2 py-3 text-right">
        {parseInt(item.scrnCnt).toLocaleString()}

      </td>
    </tr>);
    setTags(tm);
  }


  useEffect(() => {
    setDt(getYesterday());
    refDt.current.max = getYesterday();
  }, []);

  useEffect(() => {
    if (!dt) return;
    refDt.current.value = dt;
    getFetchData();
  }, [dt]);


  return (
    <div className="w-11/12 ">
      <div className="w-full text-sm text-right my-2">
        <span className="inline-flex mr-2 text-md font-bold">
          날짜선택
        </span>
        <input type="date" ref={refDt}
          className="p-2 border"
          onChange={handleChange}
          id="dt" />
      </div>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500">
        <thead className="text-md font-bold text-gray-900 bg-gray-50
                            border-b-2">
          <tr>
            <td className="p-4 w-16">
              순위
            </td>
            <td className="px-6 py-2">
              영화명
            </td>
            <th className="px-6 py-2 w-1/7">
              매출액
            </th>
            <th className="px-6 py-2 w-1/7">
              관객수
            </th>
            <th className="px-6 py-2 w-1/7">
              누적매출액
            </th>
            <th className="px-6 py-2 w-1/7">
              누적관객수
            </th>
            <th className="px-6 py-2 w-1/7">
              상영횟수
            </th>
            <th className="px-6 py-2 w-1/7">
              상영스크린수
            </th>
          </tr>
        </thead>
        <tbody>
          {tags}
        </tbody>
        <tfoot>
          <tr className="text-md h-12 font-bold text-gray-900 bg-gray-100
                            border-y-2">
            <td colSpan="8" className="text-center">
              {info}
            </td>
          </tr>
        </tfoot>
      </table>

    </div>

  )
}