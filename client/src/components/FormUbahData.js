/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

const FormUbahData = () => {
  const [namaProduk, setNamaProduk] = useState('')
  const [keterangan, setKeterangan] = useState('')
  const [harga, setHarga] = useState(0)
  const [jumlah, setJumlah] = useState(0) 
  const {id} = useParams()
  const navigate = useNavigate()
  
  useEffect(() => {
    getProdukById()
  }, [])

  const getProdukById = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/${id}`)
      setNamaProduk(response.data.nama_produk)
      setKeterangan(response.data.keterangan)
      setHarga(response.data.harga)
      setJumlah(response.data.jumlah)
    } catch (error) {
      console.log(error)
    }
  }
  
  const ubahData = async (e) => {
    e.preventDefault()
    try {
      await axios.put(`http://localhost:5000/editProduk/${id}`,{
        nama_produk: namaProduk,
        keterangan,
        harga,
        jumlah,
      })
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className='max-w-6xl mx-auto pt-24'>
      <div className="w-full">
        <div className="flex justify-between">
          <h1 className='text-2xl font-semibold'>Ubah Produk</h1>
          <Link to={'/'}>
            <button className='px-4 py-2 font-semibold rounded-full bg-sky-500 text-white text-sm'>Kembali</button>
          </Link>
        </div>
        <form onSubmit={ubahData}>
          <div className="bg-slate-100 mt-12 border shadow-md rounded p-12 space-y-10">
            <div className='space-y-2'>
                <label htmlFor="name_produk" className='font-medium'>Nama Produk</label>
                <input type="text" name="nama_produk" id='nama_produk' placeholder='Masukkan nama produk' className='w-full bg-white rounded text-slate-700 outline-none border py-2 px-4' value={namaProduk} onChange={(e) => setNamaProduk(e.target.value)}/>
            </div>

            <div className='space-y-2'>
                <label htmlFor="keterangan" className='font-medium'>Keterangan</label>
                <input type="text" name="keterangan" id='keterangan' placeholder='Masukkan keterangan produk' className='w-full bg-white rounded text-slate-700 outline-none border py-2 px-4' value={keterangan} onChange={(e) => setKeterangan(e.target.value)}/>
            </div>

            <div className='space-y-2'>
                <label htmlFor="harga" className='font-medium'>Harga</label>
                <input type="text" name="harga" id='harga' placeholder='masukkan harga produk' className='w-full bg-white rounded text-slate-700 outline-none border py-2 px-4' value={harga} onChange={(e) => setHarga(e.target.value)}/>
            </div>
          
            <div className='space-y-2'>
                <label htmlFor="jumlah" className='font-medium'>Jumlah</label>
                <input type="text" name="jumlah" id='jumlah' placeholder='masukkan jumlah produk' className='w-full bg-white rounded text-slate-700 outline-none border py-2 px-4' value={jumlah} onChange={(e) => setJumlah(e.target.value)}/>
            </div>  
          </div>
          <div className='flex justify-end p-6'>
              <button type='submit' className='px-8 py-2 rounded bg-teal-500 text-white text-sm'>Simpan</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default FormUbahData