import React from 'react'
import Login from './screens/Login'
import Register from './screens/Register'
import { Route, Routes } from "react-router-dom"
import Home from "./screens/Home"
import AddMenu from "./components/AddMenu"
import DeleteMenu from "./components/DeleteMenu"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/home" element={<Home />} />
       <Route path="/addmenu" element={<AddMenu />} />
       <Route path="/deletemenu" element={<DeleteMenu />} />
    </Routes>
  );
}

export default App