import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import DetailProduk from './components/DetailProduk'
import FormTambahData from './components/FormTambahData'
import FormUbahData from './components/FormUbahData'
import ListProduks from './components/ListProduks'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ListProduks/>}/>
        <Route path='/tambahData' element={<FormTambahData/>}/>
        <Route path='/ubahData/:id' element={<FormUbahData/>}/>
        <Route path='/detailProduk/:id' element={<DetailProduk/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App