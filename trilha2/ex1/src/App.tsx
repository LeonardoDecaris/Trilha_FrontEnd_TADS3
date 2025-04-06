import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Counter from './components/Counter'

function App() {

  return (
    <>
      <BrowserRouter>
        <Counter initialValue={0} />
      </BrowserRouter>
    </>
  )
}

export default App
