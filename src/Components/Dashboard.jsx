import {useAuth} from '../contexts/Auth'
import React, { useState } from "react"
import { useHistory } from "react-router-dom"
import NavBar from './NavBar'
import '../App.css'
export default function Dashboard() {
  const [ setError] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useHistory()

  async function handleLogout() {
    setError("")

    try {
      await logout()
      history.push("/Login")
    } catch {
      setError("Failed to log out")
    }
  }
  return (
    <div>
      <NavBar/>
      <div> 
        {currentUser.email}
      </div>
      <button className='btn-login' onClick={handleLogout}>Đăng xuất</button>
    </div>
  )
}