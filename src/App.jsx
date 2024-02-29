import { useState } from 'react'
import './App.css'
import { useParams, Routes, Route } from 'react-router-dom'
import Update from './components/Update'
import NotFound from './components/NotFound'
import AddEvent from './components/AddEvent'
import 'bootstrap/dist/css/bootstrap.css';


function App() {
  const [count, setCount] = useState(0)


  return (
    <>
      <Routes>
        <Route path="/updating/:id" element={<Update />} />
        <Route path="/event" element={<AddEvent />} />
        <Route path="*" element={<NotFound />}></Route>

      </Routes>
    </>
  )
}

export default App
