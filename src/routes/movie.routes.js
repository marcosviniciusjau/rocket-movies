const { Router } = require('express')

const MoviesNotesController = require('../controllers/MoviesNotesController')

const movieNotesRoutes = Router()

const movieNotesController = new MoviesNotesController()

movieNotesRoutes.get('/', movieNotesController.index)
movieNotesRoutes.post('/:user_id', movieNotesController.create)
movieNotesRoutes.get('/:id', movieNotesController.show)
movieNotesRoutes.delete('/:id', movieNotesController.delete)

module.exports = movieNotesRoutes