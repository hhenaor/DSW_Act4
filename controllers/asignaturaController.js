const supabase = require('../config/supabaseClient')

const createAsignatura = async (req, res) => {
  const body = req.body
  body.estudiante_id = req.usuario.id
  const { data, error } = await supabase
    .from('Asignaturas')
    .insert([body])
    .select()
  if (error)
    return res.status(500).json({ error: 'Error crear asignatura', details: error.message })

  res.status(201).json(data[0])
}

const getAllAsignaturas = async (req, res) => {
  const userId = req.usuario.id
  const { data, error } = await supabase
    .from('Asignaturas')
    .select('*')
    .eq('estudiante_id', userId)
  if (error)
    return res.status(500).json({ error: 'Error obtener asignaturas', details: error.message })

  res.status(200).json(data)
}

const getAsignaturaById = async (req, res) => {
  const { id } = req.params
  const userId = req.usuario.id
  const { data, error } = await supabase
    .from('Asignaturas')
    .select('*')
    .eq('id', id)
    .eq('estudiante_id', userId)
    .single()
  if (error || !data)
    return res.status(404).json({ error: 'No autorizada o no encontrada' })

  res.status(200).json(data)
}

const updateAsignatura = async (req, res) => {
  const { id } = req.params
  const body = req.body
  const userId = req.usuario.id
  const { data, error } = await supabase
    .from('Asignaturas')
    .update(body)
    .eq('id', id)
    .eq('estudiante_id', userId)
    .select()
  if (error || !data || data.length === 0)
    return res.status(404).json({ error: 'No autorizada o no encontrada' })

  res.status(200).json(data[0])
}

const deleteAsignatura = async (req, res) => {
  const { id } = req.params
  const userId = req.usuario.id
  const { error } = await supabase
    .from('Asignaturas')
    .delete()
    .eq('id', id)
    .eq('estudiante_id', userId)
  if (error)
    return res.status(404).json({ error: 'No autorizada o no encontrada' })

  res.status(200).json({ message: 'Eliminada correctamente' })
}

module.exports = {
  createAsignatura,
  getAllAsignaturas,
  getAsignaturaById,
  updateAsignatura,
  deleteAsignatura
}
