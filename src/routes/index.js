const { Router } = require("express");
const routes = Router();

const usersRoutes = require("./user.routes");
const moviesRoutes = require("./movie.routes");

routes.use('users', usersRoutes);

routes.use('movies', moviesRoutes);

module.exports = routes;