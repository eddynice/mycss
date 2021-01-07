import React,{useState} from 'react'
import Dropdown from './component/Dropdown'
import Info from './component/Info'
import { SliderData } from './data/SlideData'
import GlobalStyle from './globalStyle'
import Hero from './Hero'
//import GlobalStyle from './creatGlobalStyle'
import Navbar from './Navbar';
import { InfoData,InfoDataTwo } from './data/infoData'

export default function App() {
  const [isOpen, setisOpen] = useState(false)

  const toggle=()=>{
    setisOpen(!isOpen)
  }
  return (
  
<>
 <GlobalStyle/>
  <Navbar toggle={toggle}/>
  <Dropdown isOpen={isOpen} toggle={toggle}/>
  <Hero slide={SliderData}/>
  <Info {...InfoDataTwo}/>
</>
    
    
    
  )
}

