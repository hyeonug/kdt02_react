import MyToggleBox from "./MyToggleBox"

export default function MyToggle() {
  return (
    <div className="w-9/10 grid grid-cols-1 lg:grid-cols-3 gap-4">
      <MyToggleBox color="blue" />
      <MyToggleBox color="orange"  />
      <MyToggleBox color="lime"  />
    </div>
  )
}
