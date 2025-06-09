export default function MyClockTime() {
  return (
    <div className="text-2xl font-bold">  
      현재 시각 : {new Date().toLocaleTimeString()}
    </div>
  )
}