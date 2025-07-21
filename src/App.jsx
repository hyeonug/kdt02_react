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
import MyToggle from './07/MyToggle'
import MyEffect from './08/MyEffect'
import BoxOffice from './09/BoxOffice'
import Traffic from './10/Traffic'
import MyRef from './11/MyRef'
import Gallery from './12/Gallery'
import Festival from './13/Festival'
import Fcst from './15/Fcst'
import FcstList from './15/FcstList'
// import RouteMain from './14/RouteMain'
import MyDivMain from './17/MyDivMain'
import ChargerInfo from './18/ChargerInfo'

import AppNav from './AppNav'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
   
  return ( 
    <BrowserRouter>
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
        <AppNav />
        <GroupText />
      </header>
      <main className="w-full flex-grow
                       overflow-y-auto py-10
                       flex flex-col justify-start items-center">
        <Routes>
          <Route path='/' element={<MyClock />} />
          <Route path='/lotto' element={<Lotto />} />
          <Route path='/food' element={<FoodMain />} />
          <Route path='/box' element={<BoxOffice />} />
          <Route path='/traffic' element={<Traffic />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/festival' element={<Festival />} />
          <Route path='/fcst' element={<Fcst />} />
          <Route path='/fcstlist' element={<FcstList />} />
          <Route path='/mydiv' element={<MyDivMain />} />
          <Route path='/charger' element={<ChargerInfo />} />
        </Routes>
      </main>
      <footer className="w-full min-h-20
                        bg-black text-white
                         flex justify-center items-center">
        K-digital 2025 2기 FrontEnd
      </footer>
    </div> 
    </BrowserRouter>  
  )
}

export default App
