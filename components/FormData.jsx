
import React, { useState } from 'react'

function FormData() {
  // Mood Form States//
  const [mood, setMood] = useState("");
  const [note, setNote] = useState("");
  const [error, setError] = useState("");

  //POST to Flask//
  async function saveMood(event) {
    event.preventDefault();
    try {
      const response = await fetch("http://127.0.0.1:5000/save", {
        method: "POST",
        body: JSON.stringify({ mood, note }),
        headers: { "Content-Type": "application/json" },
      });
      const data = await response.json();
      console.log("Mood Saved!", data);
      setMood("");
      setNote("");
    } catch (error) {
      console.error(error);
    }
  }

  function handleMood(event) {
    setMood(event.target.value);
  }

  function handleNote(event) {
    setNote(event.target.value);
  }

  return (
    <div>
      <h2>Today's Mood</h2>
      <form onSubmit={saveMood}>
        <label>Mood: </label>
        <select value={mood} onChange={handleMood}>
          <option value="">Choose a Mood</option>
          <option value="Happy">Happy</option>
          <option value="Sad">Sad</option>
          <option value="Excited">Excited</option>
          <option value="Tired">Tired</option>
          <option value="Calm">Calm</option>
          <option value="Angry">Angry</option>
        </select>
        <label>Note: </label>
        <textarea value={note} onChange={handleNote}></textarea>
        <button type="submit">Save Mood</button>
      </form>
      <p>Current Mood: {mood}</p>
      <p>Current Note: {note}</p>
    </div>
  );
}

export default FormData