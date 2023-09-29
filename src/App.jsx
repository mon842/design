
import './App.css'
import Landing from './components/Landing'
import Login from './components/Login'
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {

  return (
    <BrowserRouter>

      <Routes>
        <Route index element={<Landing />} />
        <Route path="auth" element={<Login />} />

      </Routes>

    </BrowserRouter>
  )
}

export default App

