const express = require('express');
const req = require('express/lib/request');
const route = express.Router();
const {GetUserDetail,PostUserDetail,DeleteUserDetail,PutUserDetail,GetUserDetailById} = require('../Modal/controller/Controller')

route.get('/userData',GetUserDetail);
route.post('/userData',PostUserDetail);
route.put('/userData/:_id',PutUserDetail);
route.get('/userData/:_id',GetUserDetailById);
route.put('/userData/:_id',PutUserDetail);
route.delete('/userData/:_id',DeleteUserDetail);
    
module.exports = route;