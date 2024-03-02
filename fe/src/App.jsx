import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { Signin } from './pages/Signin'
import { Signup } from './pages/Signup'
import { Dashboard } from './pages/Dashboard'
import { Navbar } from './components/Navbar'

function App() {

  return (
    <>
      <Navbar />
    </>
  )

}

export default App
