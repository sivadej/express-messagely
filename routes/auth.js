const express = require('express');
//const User = require('../models/user');
//need to import Messages ???

const router = new express.Router();

router.get('/', (req,res)=>{
    return res.send('hello from auth routes!');
})

/** POST /login - login: {username, password} => {token}
 *
 * Make sure to update their last-login!
 *
 **/


/** POST /register - register user: registers, logs in, and returns token.
 *
 * {username, password, first_name, last_name, phone} => {token}.
 *
 *  Make sure to update their last-login!
 */

module.exports = router;