var express = require('express');
var router = express.Router();
var stopsJson = require('../views/stops.json');
var legsJson = require('../views/legs.json');
// var driverJson = require('../views/driver.json');

var driverJson = {
  "activeLegID": "FG",
  "legProgress": "33"
  }

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET stops page. */
router.get('/stops', function(req, res, next) {
  res.send(stopsJson);
});

/* GET legs page. */
router.get('/legs', function(req, res, next) {
  res.send(legsJson);
});

/* GET driver page. */
router.get('/driver', function(req, res, next) {
  res.send(driverJson);
});

/* Update driver page. */
router.put('/driver', function(req, res, next) { 
  driverJson = JSON.stringify(req.body)
  
  res.send(driverJson);
})


module.exports = router;
