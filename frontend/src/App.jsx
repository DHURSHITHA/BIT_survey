import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SurveyCreation from './pages/createsurvey'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <SurveyCreation/>
    </>
  )
}

export default App
