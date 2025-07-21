
export default function TailCard({imgurl, title, subtitle, content}) {
  let tag ;
  if (content.includes(',')) {
    tag = content.split(',') ;
    tag = tag.map(item => <span key={item} 
                          className="bg-gray-100 inline-flex p-1 m-1 rounded">
                          {item}
                          </span>)
  }
  else tag = <span className="bg-gray-100 w-full flex p-2 m-1 rounded">
             { content }
             </span> ;
  
  return (
    <div className="max-w-lg bg-white 
                    border border-gray-200 
                    rounded-lg shadow-sm">
 
     {imgurl && <div className="w-full h-48">
      <img className="w-full h-full rounded-t-lg object-cover" 
            src={imgurl} alt={title} />
      </div> } 
      <div className="p-5 flex flex-col justify-start items-start">
        <h1 className="w-full mb-2 text-2xl font-bold 
                      tracking-tight text-gray-900">
            {title}
        </h1> 
        <div className="w-full mb-3 font-normal text-gray-700 
                        text-left">
          {subtitle}
        </div>
        <div className="w-full text-left text-sm">
          {tag}
        </div>
      </div>
    </div>
  )
}
