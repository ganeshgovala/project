import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { Signin } from './pages/Signin'
import { Signup } from './pages/Signup'

function App() {

  return (
    <div>
      <Signin/>
      <Signup/>
    </div>
  )

}

export default App
