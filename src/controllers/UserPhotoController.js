const DiskStorage = require("../providers/DiskStorage") 
const knex = require("../database/knex")
class UserPhotoController {
  async update(request, response) {
    const user_id = request.user.id 
    const photoFilename = request.file.filename 

    const diskStorage = new DiskStorage() 

    const user = await knex("users").where({ id: user_id })
  
    if (!user) {
      throw new AppError("Somente usuários autenticados podem mudar o photo", 401) 
    }

    if (user.photo) {
      await diskStorage.deleteFile(user.photo) 
    }

    const filename = await diskStorage.saveFile(photoFilename) 
    user.photo = filename 

    await knex("users").where({ id: user_id }).update({ photo: filename })

    return response.json(user) 
  }
}

module.exports = UserPhotoController 