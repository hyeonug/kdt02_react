import { useState, useEffect } from "react";
import TailButton from "../component/TailButton";
import TailCard from "../component/TailCard";
import zcode from "./zcode.json";
import zscode from "./zscode.json";
import kind from "./kind.json";
import kinddetail from "./kinddetail.json";
import TailPageNation from "../component/TailPageNation";

const PER_PAGE = 10;

export default function ChargerSearchApi() {
  const areaList = Object.entries(zcode);
  const [areaCode, setAreaCode] = useState("");
  const sigunguList = areaCode ? Object.entries(zscode[areaCode] || {}) : [];
  const [sigunguCode, setSigunguCode] = useState("");
  const kindList = Object.entries(kind);
  const [kindCode, setKindCode] = useState("");
  const kindDetailList = kindCode ? Object.entries(kinddetail[kindCode] || {}) : [];
  const [kindDetailCode, setKindDetailCode] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [search, setSearch] = useState(false);

  useEffect(() => {
    if (!search) return;
    setLoading(true);
    const apiKey = import.meta.env.VITE_DATA_API;
    let url = `https://apis.data.go.kr/B552584/EvCharger/getChargerInfo?serviceKey=${apiKey}&numOfRows=${PER_PAGE}&pageNo=${page}&dataType=JSON`;
    if (areaCode) url += `&zcode=${areaCode}`;
    if (sigunguCode) url += `&zscode=${sigunguCode}`;
    if (kindCode) url += `&kind=${kindCode}`;
    if (kindDetailCode) url += `&kindDetail=${kindDetailCode}`;
    fetch(url)
      .then(res => res.json())
      .then(result => {
        let items = result.items;
        if (Array.isArray(items)) setData(items);
        else if (items && items.item) setData(Array.isArray(items.item) ? items.item : [items.item]);
        else setData([]);
        setTotalCount(Number(result.totalCount || 0));
        setLoading(false);
      }).catch(() => setLoading(false));
  }, [search, page, areaCode, sigunguCode, kindCode, kindDetailCode]);

  useEffect(() => {
    setPage(1);
  }, [areaCode, sigunguCode, kindCode, kindDetailCode]);

  const handleReset = () => {
    setAreaCode("");
    setSigunguCode("");
    setKindCode("");
    setKindDetailCode("");
    setData([]);
    setTotalCount(0);
    setPage(1);
    setSearch(false);
  };

  let infoMsg = "";
  if (!areaCode && (kindCode || kindDetailCode)) {
    infoMsg = "지역(시/도)을 먼저 선택하세요.";
  } else if (areaCode && !kindCode) {
    infoMsg = "충전소 구분(대분류)을 선택하세요.";
  } else if (kindCode && !kindDetailCode && kindDetailList.length) {
    infoMsg = "충전소 구분(소분류)도 선택하세요.";
  }

  const pageCount = totalCount ? Math.ceil(totalCount / PER_PAGE) : 1;

  return (
    <div className="w-screen  min-h-screen flex justify-center items-start">
      <div className="p-8 bg-white rounded shadow w-full max-w-5xl">
        <h1 className="text-2xl font-bold mb-6">전기차 충전소 정보 조회</h1>
        
        <div className="flex flex-row gap-x-4 items-end mb-6">
          <div className="flex flex-col">
            <label className="font-semibold mb-1">지역(시/도)</label>
            <select
              className="border rounded px-3 py-2"
              value={areaCode}
              onChange={e => {
                setAreaCode(e.target.value);
                setSigunguCode("");
              }}>
              <option value="">--선택--</option>
              {areaList.map(([code, name]) =>
                <option key={code} value={code}>{name}</option>
              )}
            </select>
          </div>
          {areaCode &&
            <div className="flex flex-col">
              <label className="font-semibold mb-1">지역(시/군/구)</label>
              <select
                className="border rounded px-3 py-2"
                value={sigunguCode}
                onChange={e => setSigunguCode(e.target.value)}
              >
                <option value="">--선택--</option>
                {sigunguList.map(([name, code]) =>
                  <option key={code} value={code}>{name}</option>
                )}
              </select>
            </div>
          }
          <div className="flex flex-col">
            <label className="font-semibold mb-1">충전소 구분(대분류)</label>
            <select
              className="border rounded px-3 py-2"
              value={kindCode}
              onChange={e => {
                setKindCode(e.target.value);
                setKindDetailCode("");
              }}>
              <option value="">--선택--</option>
              {kindList.map(([code, name]) =>
                <option key={code} value={code}>{name}</option>
              )}
            </select>
          </div>
          {kindDetailList.length > 0 &&
            <div className="flex flex-col">
              <label className="font-semibold mb-1">충전소 구분(소분류)</label>
              <select
                className="border rounded px-3 py-2"
                value={kindDetailCode}
                onChange={e => setKindDetailCode(e.target.value)}
              >
                <option value="">--선택--</option>
                {kindDetailList.map(([name, code]) =>
                  <option key={code} value={code}>{name}</option>
                )}
              </select>
            </div>
          }
          
          <div className="flex flex-row gap-x-2 ml-2">
            <TailButton
              caption="검색"
              color="blue"
              onClick={() => {
                setSearch(false);
                setTimeout(() => setSearch(true), 0);
              }}
            />
            <TailButton
              caption="리셋"
              color="orange"
              onClick={handleReset}
            />
          </div>
          {infoMsg && (
            <div className="ml-4 text-red-600 whitespace-nowrap">{infoMsg}</div>
          )}
        </div>
       
        {loading
          ? <div className="text-center p-8">로딩중...</div>
          : (search && areaCode) &&
            <>
              <div className="mb-2">조회 결과: {totalCount}건</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">
                {data.length === 0 &&
                  <div className="col-span-full text-center p-8">결과가 없습니다</div>
                }
                {data.map((row, i) =>
                  <TailCard
                    key={row.statId || i}
                    
                    title={row.statNm}
                    subtitle={row.addr}
                    content={row.bnm}
                  />
                )}
              </div>
              <TailPageNation
                currentPage={page}
                totalPage={pageCount}
                onPageChange={setPage}
              />
              
            </>
        }
      </div>
    </div>
  );
}
