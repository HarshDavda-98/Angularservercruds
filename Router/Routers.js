const express = require('express');
const req = require('express/lib/request');
const route = express.Router();
const {GetUserDetail,PostUserDetail} = require('../Modal/controller/Controller')

route.get('/userData',GetUserDetail);
route.post('/userData',PostUserDetail);
    
module.exports = route;