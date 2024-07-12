const { Router } = require("express") 
const multer = require("multer") 

const uploadConfig = require("../configs/upload") 
const ensureAuthenticated = require("../middlewares/ensureAuthenticated") 

const UsersController = require("../controllers/UsersController") 
const UsersValidatedController = require("../controllers/UsersValidatedController") 
const UserPhotoController = require("../controllers/UserPhotoController") 

const usersRoutes = Router() 

const usersController = new UsersController()
const usersValidatedController = new UsersValidatedController() 
const userPhotoController = new UserPhotoController() 

const upload = multer(uploadConfig.MULTER) 

usersRoutes.post("/", usersController.create)
usersRoutes.get("/validated", ensureAuthenticated, usersValidatedController.index)
usersRoutes.put("/", ensureAuthenticated, usersController.update) 
usersRoutes.patch("/photo", ensureAuthenticated, upload.single("photo"), userPhotoController.update) 

module.exports = usersRoutes 