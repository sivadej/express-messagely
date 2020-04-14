const express = require('express');
const User = require('../models/user');
const {ensureLoggedIn, ensureCorrectUser} = require('../middleware/auth');

const router = new express.Router();

// testing stuff
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
router.get('/', ensureLoggedIn, async (req,res,next)=>{
    try{
        let users = await User.all();
        return res.json({users});
    }
    catch (err) {
        return next(err);
    }
})


/** GET /:username - get detail of users.
 *
 * => {user: {username, first_name, last_name, phone, join_at, last_login_at}}
 *
 **/
router.get('/:username', ensureLoggedIn, async (req,res,next) =>{
    try{
        let user = await User.get(req.params.username)
        return res.json({user})
    }
    catch (err){
        return next(err);
    }
})


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