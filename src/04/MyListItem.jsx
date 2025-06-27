import { useState } from "react";


export default function MyListItem({ title, imgUrl, content }) {
  
  const [cnt,setCnt] = useState(0);

 
 

  const handleClick = () => {
   
    setCnt(cnt + 1);
  };
  const handleBadClick = () => {
   
  if(cnt>0){
    setCnt(cnt-1);
  }
  };
  

  return (
    <div className="w-full h-full flex border border-gray-300 rounded-lg overflow-hidden my-2">
      <div className="w-1/4 flex-shrink-0">
        
       <img src={imgUrl} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="w-3/4 p-4 flex flex-col justify-between">
        <div>
          <h1 className="text-2xl font-bold mb-2">
            {title}
          </h1>
          <p className="text-base text-gray-700">
            {content}
          </p>
        </div>
        <div className="text-xl font-bold flex justify-end items-end">
          <span className="hover:cursor-pointer hover:text-red-500 "onClick={handleClick}>
            😊 좋아요 
          </span>
          
          <span className="hover:cursor-pointer hover:text-red-500 "onClick={handleBadClick}>
            😒 싫어요
            </span>
            <span className="text-2xl font-bold">{cnt}</span>
        </div>
      </div>
    </div>
  );
}


