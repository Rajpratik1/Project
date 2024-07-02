import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='p-3 bg-slate-500' style={{width:'100%', height:'100vh', margin:'0'}}>
        <nav className='w-full h-12 pt-1.5 pl-4 text-xl font-semibold text-white border border-black rounded-lg border-spacing-1 text-start font-google' style={{fontFamily:'Playwrite USA Traditional'}}>
          Portfolio
          <ul>
            <li>About Us</li>
            <li>Projects</li>
            <li>Contact Us</li>
            <li></li>
            <li></li>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default App
