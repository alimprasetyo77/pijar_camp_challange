import { DataTypes } from "sequelize";
import db from '../config/db.js'

const Produks = db.define('produk',{
    nama_produk : {
        type: DataTypes.STRING,
    },
    keterangan : {
        type : DataTypes.STRING,
    },
    harga : {
        type : DataTypes.INTEGER,
    },
    jumlah : {
        type : DataTypes.INTEGER,
    }
},{
    freezeTableName : true
});

export default Produks

// ;(async () => {
//     await db.sync();
// })()