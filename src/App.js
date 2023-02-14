import React from 'react'
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import './styles.css'
import CreateProduct from './pages/createProduct/CreateProduct'

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<CreateProduct/>} />
      </Routes>
    </BrowserRouter>
  )
}

