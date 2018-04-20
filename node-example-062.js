var Sequelize = require('sequelize');
var sequelize = new Sequelize('databaseName', usr, 'pwd');
var Movie = sequelize.define('movie', {
title: Sequelize.STRING,
year: Sequelize.INTEGER
})
Movie
.findAll({where: ['year = ?, 1982]})
.success(movies => {
// do something with movie
})
