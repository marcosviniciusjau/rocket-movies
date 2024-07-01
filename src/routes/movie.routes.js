const { Router } = require('express')

const MoviesController = require('../controllers/MoviesNotesController')

const moviesRoutes = Router()

const moviesController = new MoviesController()

moviesRoutes.post('/', moviesController.create)

module.exports = moviesRoutes