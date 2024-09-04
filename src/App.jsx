import Home from "./views/Home/Home"
import NavBar from "./components/NavBar/NavBar"
import MisTurnos from "./views/MisTurnos/MisTurnos"
import Register from "./views/Register/Register"
import Login from "./views/Login/Login"
import { Routes, Route } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify"
import About from "./views/About/About"

function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/turnos" element={<MisTurnos />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <ToastContainer />
    </>
  )
}

export default App
