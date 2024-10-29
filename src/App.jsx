


import './App.css'
import NavBar from './Components/Navbar/NavBar'
import PriceOption from './Components/PricesOptions/PricesOptions'
// import DaisyNav from './Components/DaisyNav/DaisyNav'
import LineChart from './Components/LineChart/LineChart'
import Phones from './Components/Phones/Phones'
function App() {
 

  return (
    <>
    <NavBar></NavBar>
    {/* <DaisyNav></DaisyNav> */}


    <PriceOption></PriceOption>

    <LineChart></LineChart>
    <Phones></Phones>

 

    </>
  )
}

export default App
