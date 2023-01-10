import Produk from '../models/ProdukModel.js'

const getProduks = async (req, res) => {
    try {
        const produks = await Produk.findAll()
        res.json(produks)
    } catch (error) {
        console.log(error)
    }
}

const getProdukById = async (req, res) => {
    try {
        const produk = await Produk.findOne({
            where : {
                id: req.params.id
            }
        })
        res.json(produk)
    } catch (error) {
        console.log(error)
    }
}

const addProduk = async (req, res) => {
    const {nama_produk, keterangan, harga, jumlah} = req.body
    try {
        await Produk.create({
            nama_produk : nama_produk,
            keterangan : keterangan,
            harga : harga,
            jumlah : jumlah
        })
        res.json({message : 'Produk created'})
    } catch (error) {
        console.log(error)
    }    
}

const updateProduk = async (req, res) => {
    const {nama_produk, keterangan, harga, jumlah} = req.body
    try {
        await Produk.update({
            nama_produk : nama_produk,
            keterangan : keterangan,
            harga : harga,
            jumlah : jumlah
        }, {
            where : {
                id : req.params.id
            }
        })
        res.json({message : 'Produk updated'})        
    } catch (error) {
        console.log(error)
    }
}

const deleteProduk = async (req, res) => {
    try {
        await Produk.destroy({where : {id : req.params.id}})
        res.json({message : 'Produk deleted successfully'})
    } catch (error) {
        console.log(error)
    }
}

export {getProduks, getProdukById, addProduk, updateProduk, deleteProduk}