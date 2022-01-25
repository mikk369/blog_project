import express from 'express';
import fs from 'fs';
import createUser from './user/createUser';
import getUser from './user/getUser';
const router = express.Router();
var userRoutes: string[] = [];

fs.readdirSync(__dirname + '/user').forEach(function (file) {
  userRoutes.push(file.substring(0, file.indexOf('.')));
});
console.log(userRoutes.toString());

router.use('/user', [createUser, getUser]);

export default router;
