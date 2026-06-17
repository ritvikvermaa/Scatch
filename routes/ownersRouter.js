const express = require('express');
const router = express.Router();
const ownerModel = require("../models/owner-model");
const bcrypt = require("bcrypt");
const isOwnerLoggedin = require('../middlewares/isOwnerLoggedin');
const {generateToken} = require("../utils/generateToken");

if (process.env.NODE_ENV === "development") {
    router.post("/create", async (req, res) => {
        let owners = await ownerModel.find();

        if (owners.length > 0) {
            return res
                .status(504)
                .send("You don't have permission to create new owner");
        }

        let { fullname, email, password } = req.body;

        bcrypt.genSalt(10, function (err, salt) {
            bcrypt.hash(password, salt, async function (err, hash) {
                let createdOwner = await ownerModel.create({
                    fullname,
                    email,
                    password: hash
                });

                res.status(201).send(createdOwner);
            });
        });
    });
}

router.get("/login", function(req, res) {
    res.render("owner-login");
});

router.get("/admin", isOwnerLoggedin, (req, res) => {
    let success = req.flash("success");
    res.render("createproducts", { success, isOwner: true });
});

router.post("/login", async function(req,res){
    let { email, password } = req.body;
    let owner = await ownerModel.findOne({ email });
    if(!owner){
        return res.send("Invalid Email or Password");
    }
    bcrypt.compare(password, owner.password, function(err,result){
        if(!result){
            return res.send("Invalid Email or Password");
        }
        let token = generateToken(owner);
        res.cookie("token", token);
        res.redirect("/owners/admin");
    });
});

router.get("/logout", function(req,res){
    res.cookie("token","");
    res.redirect("/owners/login");
});

module.exports = router;