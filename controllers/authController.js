const supabase = require('../config/supabaseClient')
const { generarToken } = require('./authToken')

const register = async (req, res) => {
  const { username, password, nombre, email } = req.body
  if (!username || !password || !nombre || !email)
    return res.status(400).json({ error: 'Campos incompletos' })

  const { data, error } = await supabase
    .from('Usuario')
    .insert([{ username, password, nombre, email }])
    .select()
  if (error)
    return res.status(500).json({ error: 'Error registro', details: error.message })

  res.status(201).json({ message: 'Usuario registrado', user: data[0] })
}

const login = async (req, res) => {
  const { username, password } = req.body
  if (!username || !password)
    return res.status(400).json({ error: 'Faltan credenciales' })

  const { data, error } = await supabase
    .from('Usuario')
    .select('*')
    .eq('username', username)
    .single()
  if (error || !data || data.password !== password)
    return res.status(401).json({ error: 'Datos incorrectos' })

  const token = generarToken(data)
  res.status(200).json({ message: 'Login ok', token })
}

module.exports = { register, login }
