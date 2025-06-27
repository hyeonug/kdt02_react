import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import GroupText from './01/GroupText'
import MyClock from './02/MyClock'
import MyDiv from './03/MyDiv'
import MyList from './04/MyList'
import MyListItem from './04/MyListItem'
import Lotto from './05/Lotto'
import FoodMain from './06/FoodMain'

function App() {
   
  return ( 
    <div className="w-full xl:w-8/10 h-screen mx-auto
                    flex flex-col justify-start items-start
                   ">
      <header className="w-full min-h-20 
                         bg-amber-50
                         flex justify-between items-center">
        <div className="flex ml-10">
          <img src={reactLogo} alt="react" /> + 
          <img src="/vite.svg" alt="vite" />
        </div>
        <GroupText />
      </header>
      <main className="w-full flex-grow
                       overflow-y-auto py-10
                       flex flex-col justify-start items-center">
        <FoodMain />
      </main>
      <footer className="w-full min-h-20
                        bg-black text-white
                         flex justify-center items-center">
        K-digital 2025 2기 FrontEnd
      </footer>
    </div>   
  )
}

export default App