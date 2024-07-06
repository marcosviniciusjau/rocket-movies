const knex = require("knex")
const AppError = require("../utils/AppError")
const DiskStorage = require("../providers/DiskStorage")
class UserPhotoController {
  async update(request, response) {
    const user_id = request.user.id
    const userPhoto = request.file.filename

    const diskStorage = new DiskStorage()

    const user = await knex('users').where({ id: user_id }).first()

    if (!user) {
      throw new AppError('Usuário não encontrado', 404)
    }
    if(user.photo){
      await diskStorage.deleteFile(user.photo)
    }
    
    const filename = await diskStorage.saveFile(userPhoto)
    user.phot = filename

    await knex("users").update(user).where({ id: user_id })

    return response.json()
  }
}