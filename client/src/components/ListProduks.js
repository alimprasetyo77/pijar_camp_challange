import React, { useEffect, useState } from 'react'
import {MdDeleteOutline, MdOutlineModeEditOutline} from 'react-icons/md'
import {AiFillWarning} from 'react-icons/ai'
import {BiShow} from 'react-icons/bi'
import axios from 'axios'
import { Link } from 'react-router-dom'

const ListProduks = () => {
  const [produks, setProduks] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [id, setId] = useState(null)

  useEffect(() => {
    getProduks()
  }, [])

  const getProduks = async () => {
    try {
      const response = await axios.get('http://localhost:5000/')
      setProduks(response.data)
    } catch (error) {
      console.log(error)
    }
  }
  const hapusData = async () => {
    try {
      await axios.delete(`http://localhost:5000/${id}`)
      getProduks()
    } catch (error) {
      console.log(error)
    }
  }
  return (
   <>
     <div className='max-w-6xl mx-auto pt-24'>
      <div className="w-full">
        <div className="flex justify-between">
          <h1 className='text-3xl font-semibold'>Daftar Produk</h1>
          <Link to={'/tambahData'}>
            <button className='px-4 py-2 rounded-full bg-green-500 text-white font-semibold text-sm hover:opacity-80'>Tambah Produk</button>
          </Link>
        </div>
        <div className="bg-slate-100 mt-12 border shadow-md rounded ">
            <table className='table-auto w-full'>
                    <thead className='text-xs font-semibold uppercase text-slate-500 bg-slate-200'>
                        <tr>
                            <th className='p-2'>
                                <span className='font-semibold'>No</span> 
                            </th>
                            <th className='p-2'>
                                <span className='font-semibold'>Nama Produk</span> 
                            </th>
                            <th className='p-2'>
                                <span className='font-semibold'>Keterangan</span> 
                            </th>
                            <th className='p-2'>
                                <span className='font-semibold'>Harga</span> 
                                </th>
                            <th className='p-2'>
                                <span className='font-semibold'>Jumlah</span> 
                                </th>
                            <th className='p-2'>
                                <span className='font-semibold'>Aksi</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {produks.map((p, index) => (
                            <tr className='text-center font-medium text-gray-800' key={p.id}>
                                <td className="p-2 w-12">{index + 1}</td>
                                <td className="p-2">{p.nama_produk}</td>
                                <td className="p-2">{p.keterangan}</td>
                                <td className="p-2 text-green-500">${p.harga}</td>
                                <td className="p-2">{p.jumlah}</td>
                                <td className="p-2 max-w-[92px]">
                                    <div className="flex justify-center gap-x-4">
                                        <button className='px-4 py-1 bg-rose-500 hover:bg-rose-600 transition rounded'onClick={() => setShowModal(true) || setId(p.id)}>
                                            <MdDeleteOutline className='text-white'/>
                                        </button>
                                        <Link to={`/ubahData/${p.id}`}>
                                          <button className='px-4 py-1 bg-teal-500 hover:bg-teal-600 transition rounded'>
                                              <MdOutlineModeEditOutline className='text-white'/>
                                          </button>
                                        </Link>
                                        <Link to={`/detailProduk/${p.id}`}>
                                          <button className='px-4 py-1 bg-sky-500 hover:bg-sky-600 transition rounded'>
                                              <BiShow className='text-white'/>
                                          </button>
                                        </Link>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
           </div>
      </div>
    </div>
    {showModal ? (
          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="fixed inset-0 w-full h-full bg-black opacity-40" onClick={() => setShowModal(false)}></div>
            <div className="flex items-center min-h-screen px-4 py-8">
                <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
                    <div className="mt-3 ">
                        <div className="flex items-center justify-center flex-none w-12 h-12 mx-auto bg-red-100 rounded-full">
                            <AiFillWarning className='w-7 h-7 text-red-700'/>
                        </div>
                        <div className="mt-2 text-center">
                            <p className="mt-2 text-[15px] leading-relaxed text-gray-500"> Yakin Ingin menghapus produk ?</p>
                            <div className="items-center gap-2 mt-3 sm:flex" onClick={() => setShowModal(false)}>
                                <button className="w-full mt-2 p-2.5 flex-1 text-white bg-red-600 rounded-md outline-none ring-offset-2 ring-red-600 focus:ring-2" onClick={hapusData}>Hapus</button>

                                <button className="w-full mt-2 p-2.5 flex-1 text-gray-800 rounded-md outline-none border ring-offset-2 ring-slate-600 focus:ring-2" onClick={() => setShowModal(false)}>Batal</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ): null}
   </>
  )
}

export default ListProduks