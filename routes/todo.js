var cfg = require('../config.js')
var express = require('express');
var router = express.Router();

module.exports = function (io) {
  var todo = io.of('/')
  /* GET home page. */
  router.get('/', function(req, res, next) {
    res.render('layout', { 
  	  title: 'ToDo',
  	  year: cfg.year,
  	  version: cfg.version
    });
  });
	todo.on('connection', function (socket) {
        console.log('User has connected to Index')
	})
  return router
}

