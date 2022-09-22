import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Routes, Route , BrowserRouter as Router } from 'react-router-dom'
import List from './components/List'
import Add from './components/Add'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<List></List>}></Route>
          <Route path='/add'  element={<Add></Add>}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
