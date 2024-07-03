const { Router } = require('express')

const usersRoutes = require('./user.routes')
const movieNotesRoutes = require('./movie.routes')
const movieTagsRoutes = require('./movie_tags.routes')
const sessionsRoutes = require('./sessions.routes')

const routes = Router()

routes.use('/users', usersRoutes)
routes.use('/movies', movieNotesRoutes)
routes.use('/movie_tags', movieTagsRoutes)
routes.use('/sessions', sessionsRoutes)

module.exports = routes