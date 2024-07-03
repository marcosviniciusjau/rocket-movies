const { Router } = require('express')

const MoviesNotesController = require('../controllers/MoviesNotesController')
const ensureAuthenticated = require('../middlewares/ensureAuthenticated')

const movieNotesRoutes = Router()
movieNotesRoutes.use(ensureAuthenticated)
const movieNotesController = new MoviesNotesController()

movieNotesRoutes.get('/', movieNotesController.index)
movieNotesRoutes.post('/:user_id', movieNotesController.create)
movieNotesRoutes.get('/:id', movieNotesController.show)
movieNotesRoutes.delete('/:id', movieNotesController.delete)

module.exports = movieNotesRoutes