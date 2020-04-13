const express = require('express');
const User = require('../models/user');
//need to import Messages ???

const router = new express.Router();

// testing stuff
router.get('/', (req,res)=>{
    return res.send('hello! from users');
})
router.get('/dbtest', async (req,res,next)=>{
    try {
        const users = await User.testAll();
        console.log(users);
        return res.json(users);
    }
    catch (err) {
        return next(err);
    }
})

/** GET / - get list of users.
 *
 * => {users: [{username, first_name, last_name, phone}, ...]}
 *
 **/


/** GET /:username - get detail of users.
 *
 * => {user: {username, first_name, last_name, phone, join_at, last_login_at}}
 *
 **/


/** GET /:username/to - get messages to user
 *
 * => {messages: [{id,
 *                 body,
 *                 sent_at,
 *                 read_at,
 *                 from_user: {username, first_name, last_name, phone}}, ...]}
 *
 **/


/** GET /:username/from - get messages from user
 *
 * => {messages: [{id,
 *                 body,
 *                 sent_at,
 *                 read_at,
 *                 to_user: {username, first_name, last_name, phone}}, ...]}
 *
 **/

 module.exports = router;