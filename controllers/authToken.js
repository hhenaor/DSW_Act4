const jwt = require('jsonwebtoken')
const JWT_SECRET = process.env.JWT || 'claveporomision'

const generarToken = usuario =>
  jwt.sign(
    { id: usuario.id, username: usuario.username },
    JWT_SECRET,
    { expiresIn: '1h' }
  )

const verificarToken = (req, res, next) => {
  const auth = req.headers.authorization
  if (!auth) return res.status(401).json({ error: 'Token no enviado' })
  const token = auth.split(' ')[1]
  try {
    req.usuario = jwt.verify(token, JWT_SECRET)
    next()
  } catch {
    return res.status(403).json({ error: 'Token invalido' })
  }
}

module.exports = { generarToken, verificarToken }
