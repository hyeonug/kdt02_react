import MyDiv1 from "./MyDiv1";
import { useAtom } from "jotai";
import { cntAtom, cntAtom2 } from "./CntAtom";

export default function MyDivMain() {
  const n = useAtom(cntAtom);
  const n2 = useAtom(cntAtom2);

  return (
    <div className="w-full h-full  
                    bg-lime-900 text-white text-2xl
                    p-10 font-bold
                    flex flex-col justify-center items-center">
      <div className="w-full text-left mb-10">
        MyDivMain<br />
        n = {n}, n2 = {n2}
      </div>
      <MyDiv1 />
    </div>
  );
}
