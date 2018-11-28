const express = require('express')
const routes = express.Router()

const controllers = require('./app/controllers')

const authMiddlewares = require('./app/middlewares/auth')

routes.post('/users', controllers.UserController.store)
routes.post('/sessions', controllers.SessionController.store)

routes.get('/teste', authMiddlewares, (req, res) =>
  res.json({ ok: 'autenticado' })
)

module.exports = routes
