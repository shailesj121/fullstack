import axios from 'axios'
import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [jokes, setjokes] = useState([])

  useEffect(() => {
    axios.get('/api/jokes')
    .then((response) => {
      setjokes(response.data)
    })
    .catch((error) => {
      console.log(error);
    })
  });

  return (
    <>
      <p>react local</p>
      <p>jokes: {jokes.length}</p>
      
    </>
  )
}

export default App
