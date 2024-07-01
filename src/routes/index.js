const { Router } = require('express')

const usersRoutes = require('./user.routes')
const movieNotesRoutes = require('./movie.routes')
const movieTagsRoutes = require('./movie_tags.routes')

const routes = Router()
routes.use('/users', usersRoutes)
routes.use('/movies', movieNotesRoutes)
routes.use('/movie_tags', movieTagsRoutes)

module.exports = routes