const express = require('express')
const {
  createAsignatura,
  getAllAsignaturas,
  getAsignaturaById,
  updateAsignatura,
  deleteAsignatura
} = require('../controllers/asignaturaController')
const { verificarToken } = require('../controllers/authToken')
const router = express.Router()

router.use(verificarToken)
router.get('/', getAllAsignaturas)
router.get('/:id', getAsignaturaById)
router.post('/', createAsignatura)
router.put('/:id', updateAsignatura)
router.delete('/:id', deleteAsignatura)

module.exports = router
