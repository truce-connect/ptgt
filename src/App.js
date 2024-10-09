import React from 'react'
import './App.css'
import{Cta, Brand,Navbar,} from './Component'
import{ Blog,Footer,Features,Header,Possiblity,Whatgpt} from './Container'
import './App.css'


 


const App = () => {
  return (
    <div className='App'> 
        <div className='gradient__bg'> 
       <Navbar/>
        <Header/> 
       </div>
     <Whatgpt/>
     <Brand />
    <Whatgpt />
    <Features />
    <Possiblity />
    <Cta />
    <Blog />
    <Footer />
        
      
      
    </div>
  )
}

export default App