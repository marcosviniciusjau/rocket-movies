const { Router } = require('express')
const multer = require('multer')
const uploadConfig = require('../configs/upload')

const UsersController = require('../controllers/UsersController')
const UserPhotoController = require('../controllers/UserPhotoController')
const ensureAuthenticated = require('../middlewares/ensureAuthenticated')

const usersRoutes = Router()
const upload= multer(uploadConfig.MULTER)

const usersController = new UsersController()
const userPhotoController = new UserPhotoController()

usersRoutes.post('/', usersController.create)
usersRoutes.put('/:id', ensureAuthenticated, usersController.update)
usersRoutes.patch('/photo', ensureAuthenticated, upload.single('photo'), userPhotoController.update)

module.exports = usersRoutes