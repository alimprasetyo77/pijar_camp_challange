import express from 'express'
import { addProduk, deleteProduk, getProdukById, getProduks, updateProduk } from '../controllers/Produks.js'


const router = express.Router()

router.get('/', getProduks)
router.get('/:id', getProdukById)
router.post('/tambahProduk', addProduk)
router.put('/editProduk/:id', updateProduk)
router.delete('/:id', deleteProduk)

export default router