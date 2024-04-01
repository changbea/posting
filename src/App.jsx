import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Auth from './Auth'
import Router from './Router'
import { auth } from './serverbase'

function App() {
  const [count, setCount] = useState(0)
  const [init, setInit] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userObj, setUserObj] = useState(null)

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true)
        setUserObj(user)
      } else {
        setIsLoggedIn(false)
      }
      setInit(true)
    })
  }, [])

  return (
    <div>
      {init ? <Router isLoggedIn={isLoggedIn} userObj={userObj}/> : 'initializing'}
      {/* <Auth /> */}
    </div>
  )
}

export default App
