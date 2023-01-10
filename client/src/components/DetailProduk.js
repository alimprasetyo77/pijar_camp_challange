/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const DetailProduk = () => {
    const [produk, setProduk] = useState([])
    const {id} = useParams()
    useEffect(() => {
        getProdukById()
    }, [])

    const getProdukById = async () => {
        try {
          const {data} = await axios.get(`http://localhost:5000/${id}`)
          setProduk(data)
        } catch (error) {
          console.log(error)
        }
    }

  return (
    <div className='max-w-6xl h-2/3 mx-auto my-24 bg-slate-100 shadow-lg rounded-lg border p-4'>
        <div className="w-full">
            <div className="flex justify-between">
                <h1 className='font-semibold text-3xl text-slate-700'>Detail Produk</h1> 
                <Link to={'/'}>
                    <button className='px-4 py-2 rounded bg-sky-500 text-white text-sm'>Kembali</button>
                </Link>
            </div>
            <div className='flex pt-12 p-4'>
                <span className='font-semibold text-sm'>Nama Product :</span>
                <p className='font-medium text-sm text-slate-700 ml-4'>{produk.nama_produk}</p>
            </div>
            <div className='flex pt-8 p-4'>
                <span className='font-semibold text-sm'>Keterangan :</span>
                <p className='font-medium text-sm text-slate-700 ml-4'>{produk.keterangan}</p>
            </div>
            <div className='flex pt-8 p-4'>
                <span className='font-semibold text-sm'>Harga :</span>
                <p className='font-medium text-sm text-slate-700 ml-4'>{produk.harga}</p>
            </div>
            <div className='flex pt-8 p-4'>
                <span className='font-semibold text-sm'>Jumlah :</span>
                <p className='font-medium text-sm text-slate-700 ml-4'>{produk.jumlah}</p>
            </div>
        </div>
    </div>
  )
}

export default DetailProduk