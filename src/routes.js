const express = require('express')
const routes = express.Router()

const UserController = require('./app/controllers/UserController')
const SessionController = require('./app/controllers/SessionController')

const authMiddlewares = require('./app/middlewares/auth')

routes.post('/users', UserController.store)
routes.post('/sessions', SessionController.store)

routes.get('/teste', authMiddlewares, (req, res) =>
  res.json({ ok: 'autenticado' })
)

module.exports = routes
