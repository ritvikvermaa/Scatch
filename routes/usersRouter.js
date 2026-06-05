const express = require('express');
const router = express.Router();
const userModel = require("../models/user-model");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

router.get("/", function (req, res) {
    res.send("heyy it's working");
});

router.post("/register", function (req, res) {
    try {
        let {fullname, email, password} = req.body;

        bcrypt.genSalt(10, function (err, salt) {
            bcrypt.hash(password, salt, async function (err, hash) {
                if(err) res.send(err.message);
                else {
                    let user = await userModel.create({
                        fullname,
                        email,
                        password: hash
                    });
                    
                    jwt
                }
            })
        })
    } catch (err) {
        res.send(err.message);
    }
});

module.exports = router;