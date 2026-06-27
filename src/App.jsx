
import FormData from '../components/FormData';
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  //Flask Message State//
  const [message, setMessage] = useState("");
  //Moods Result State//
  const [moods, setMoods] = useState([]);

  //Flask GET Message Function//
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

    //Flask GET Result Mood Function//
    async function getMoods() {
      try {
        const response = await fetch("http://127.0.0.1:5000/moods");
        const data = await response.json();
        setMoods(data)
      } catch (error) {
        console.error(error)
      }
    }
    getMessage();
    getMoods();
  }, [])

  return (
    <>
      <h1>Mood Tracker App</h1>
      <p>{message}</p>
      <FormData />
      <h3>Saved Moods</h3>
      {moods.map((mood, note, index) => (
        <div key={index}>
          <h4>{mood.mood}</h4>
          <p>{mood.note}</p>
        </div>
      ))}
    </>
  );
}

export default App
