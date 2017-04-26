var express = require('express');
var users = require('./controllers/users.ctrl');
var objectives = require('./controllers/objectives.ctrl');
var locations = require('./controllers/locations.ctrl');
var categories = require('./controllers/categories.ctrl');
var badges = require('./controllers/badges.ctrl');
var drink = require('./controllers/drink.ctrl');
var eat = require('./controllers/eat.ctrl');


var router = express.Router();

router.use('/users', users);
router.use('/objectives', objectives);
router.use('/locations', locations);
router.use('/categories', categories);
router.use('/badges', badges);
router.use('/drink', drink);
router.use('/eat', eat);
// router.use('/purchases', purchases);

module.exports = router;