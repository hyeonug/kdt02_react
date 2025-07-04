import { useEffect, useState } from "react";
import TailButton from "../component/TailButton";

export default function TrafficNav({ title, ct, selc, setSelC }) {
  const [tag, setTag] = useState([]);

  useEffect(() => {
    const newTag = ct.map(item => (
      <TailButton
        key={item}
        caption={item}
        color={item === selc ? "orange" : "blue"}
        onHandle={() => setSelC(item)}
      />
    ));
    setTag(newTag);
  }, [ct, selc, setSelC]);

  return (
    <div className="w-11/12 flex justify-between items-center my-5">
      <div className="text-2xl font-bold">
        교통사고 {title}
      </div>

      <div>
        {tag}
      </div>
    </div>
  );
}
