const express = require('express')
const cors = require('cors')
require('dotenv').config()

const authRoutes = require('./routes/authRoutes')
const asignaturaRoutes = require('./routes/asignaturaRoutes')

const app = express()
app.use(cors())
app.use(express.json())

app.use('/api/auth', authRoutes)
app.use('/api/asignaturas', asignaturaRoutes)

app.get('/', (req, res) => res.send('API Asignaturas OK'))

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Server en http://localhost:${PORT}`))
