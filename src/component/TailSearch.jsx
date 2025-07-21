import TailButton from "./TailButton"
export default function TailSearch({ kwRef, onOk, onCancel }) {
  return (
    <form className="w-8/10 lg:w-6/10 mt-10
                          grid grid-cols-1 lg:grid-cols-3 gap-4">

      <input type="text" id="kw"
        ref={kwRef}
        className="block p-1 mx-4 text-gray-900 
                              border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500" />
      <TailButton caption="확인"
        color="blue"
        onHandle={onOk} />

      <TailButton caption="취소"
        color="blue"
        onHandle={onCancel} />
    </form>
  )
}
