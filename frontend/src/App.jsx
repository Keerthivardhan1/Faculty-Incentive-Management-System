import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './components/ui/button'

import {

  TooltipProvider,
} from "@/components/ui/tooltip"
import { Dashboard } from './layouts/DashBoard'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TooltipProvider>
      <Dashboard />
      </TooltipProvider>
    </>
  )
}

export default App
