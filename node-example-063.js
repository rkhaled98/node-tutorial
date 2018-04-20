const Sequelize = require('sequelize')
const sequelize = new Sequelize('databaseName', usr, 'pwd')
const Movie = sequelize.define('movie', {
title: Sequelize.STRING,
year: Sequelize.INTEGER
})
const movie = Movie.build({title: 'The Matrix',year: 1999})
movie.save()
