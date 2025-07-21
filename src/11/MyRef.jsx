import TailButton from "../component/TailButton" 
import { useState, useRef, useEffect } from "react";
export default function MyRef() {
  const n1Ref = useRef() ;
  const n2Ref = useRef() ;
  const n3Ref = useRef() ;
  const opRef = useRef() ;

  const handleCal = (e) => {
    e.preventDefault() ;

    let n1 = parseInt(n1Ref.current.value) ;
    let n2 = parseInt(n2Ref.current.value) ;

    let n3 ;
    switch (opRef.current.value) {
      case '+' : n3 = n1 + n2 ; break ;
      case '-' : n3 = n1 - n2 ; break ;
      case 'x' : n3 = n1 * n2 ; break ;
      case '/' : n3 = n1 / n2 ; break ;
    }
    n3Ref.current.value = n3 ;
    n1Ref.current.focus() ;
  } 

  useEffect(()=>{
    n1Ref.current.focus() ;

  }, []) ;
  return (
    <div className="w-9/10 bg-lime-50 p-5 flex justify-center">
       <form className="flex justify-center">
          <input type='number' name='n1' 
                ref={n1Ref}
                className="block w-24 p-2 mx-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500"/>

          <select name="op"  defaultValue = 'x'
                ref={opRef}
                className="p-4 bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block">
            <option value="+"> + </option>
            <option value="-"> - </option>
            <option value="x"> x </option>
            <option value="/"> / </option>
          </select>
          <input type='number' name='n2' 
                ref={n2Ref}
                className="block w-24 p-2 mx-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500"/>
          <TailButton  caption = " = "
                               color = "lime" 
                               onHandle = {handleCal} />

          <input type='number' name='n3' readOnly
                ref = {n3Ref}
                className="bg-lime-100 block w-24 p-2 mx-4 text-gray-900 border border-gray-300 rounded-lg  text-base focus:ring-blue-500 focus:border-blue-500"/>
       </form>
    </div>
  )
}
