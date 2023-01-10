import { Sequelize } from "sequelize";

const db = new Sequelize('pijarcamp','root','',{
    host : 'localhost',
    dialect : 'mysql'
})

export default db