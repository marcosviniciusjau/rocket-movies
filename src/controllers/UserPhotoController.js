const sqliteConnection = require("../database/sqlite");
const DiskStorage = require("../providers/DiskStorage");

class UserphotoController {
  async update(request, response) {
    const user_id = request.user.id;
    const photoFilename = request.file.filename;

    const database = await sqliteConnection();
    const diskStorage = new DiskStorage();

    const user = await database.get("SELECT * FROM users WHERE id = (?)", [user_id]);

    if (!user) {
      throw new AppError("Somente usuários autenticados podem mudar o photo", 401);
    }

    if (user.photo) {
      await diskStorage.deleteFile(user.photo);
    }

    const filename = await diskStorage.saveFile(photoFilename);
    user.photo = filename;

    await database.run(
      `UPDATE users SET 
      photo = ?,
      updated_at = ?
      WHERE id = ?`,
      [user.photo, new Date(), user_id]
    );

    return response.json(user);
  }
}

module.exports = UserphotoController;