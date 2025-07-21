import clock from '../assets/clock.png'
export default function MyClockImg() {
  return (
    <div className="w-full flex justify-center">
      <img className="w-1/2" src={clock} alt="시계" />
    </div>
  )
}
