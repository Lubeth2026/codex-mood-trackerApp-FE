
import './App.css'
import { useEffect, useState } from 'react'

function App() {
  const [message, setMessage] = useState("");

  useEffect(()=>{
    async function getMessage() {
      try {
        const response = await fetch("http://127.0.0.1:5000/");
        const data = await response.json();
        setMessage(data.message)
      } catch (error) {
        console.error(error)
      }
    }
    getMessage();
  }, [])

  return (
    <>
      <h1>Mood Tracker App</h1>
      <p>{message}</p>
      
    </>
  )
}

export default App
