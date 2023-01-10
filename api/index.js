import express from 'express'
import cors from 'cors'
import produkRoute from './routes/ProdukRoute.js'
const app = express()

app.use(cors())
app.use(express.json())
app.use(produkRoute)

app.listen(5000, () => console.log('server listening on port 5000'))