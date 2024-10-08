import React from 'react'
import './App.css'
import{Cta, Brand,Navbar,} from './Component'
import{ Blog,Features,Footer,Header,Possiblity,Whatgpt} from './Container'
import './App.css'


 


const App = () => {
  return (
    <div className='App'> 
        <div className='gradient__bg'> 
       <Navbar/>
        <Header/> 
       </div>
     <Whatgpt/>
       <Possiblity/>
       <Cta/>
       <Features/>
       <Blog/>
       <Footer/>
       <Brand/>
        
      
      
    </div>
  )
}

export default App