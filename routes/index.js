const express = require('express');
const router = express.Router();
const isLoggedIn = require("../middlewares/isLoggedIn");
const productModel = require("../models/product-model");
const userModel = require('../models/user-model');

router.get("/", function (req, res) {
    res.render("index", { error: [], loggedin: false });
});

router.get("/shop", isLoggedIn, async function (req, res) {
    let success = req.flash("success");
    let products = await productModel.find();
    res.render("shop", { products, success });
});

router.get("/cart", isLoggedIn, async function (req, res) {
    let user = await userModel
        .findOne({ email: req.user.email })
        .populate("cart");

    let groupedCart = {};

    user.cart.forEach(product => {
        if (!groupedCart[product._id]) {
            groupedCart[product._id] = {
                product,
                quantity: 1
            };
        } else {
            groupedCart[product._id].quantity++;
        }
    });
    res.render("cart", {
        groupedCart: Object.values(groupedCart)
    });

});

router.get("/addtocart/:id", isLoggedIn, async function (req, res) {
    let user = await userModel.findOne({ email: req.user.email });
    user.cart.push(req.params.id);
    await user.save();
    req.flash("success", "Added item to cart");
    res.redirect("/shop");
});

router.get("/cart/add/:id", isLoggedIn, async function (req, res) {
    let user = await userModel.findOne({
        email: req.user.email
    });

    user.cart.push(req.params.id);
    await user.save();

    res.redirect("/cart");
});

router.get("/cart/remove/:id", isLoggedIn, async function (req, res) {
    let user = await userModel.findOne({
        email: req.user.email
    });

    let index = user.cart.findIndex(
        item => item.toString() === req.params.id
    );

    if (index > -1) {
        user.cart.splice(index, 1);
    }
    await user.save();

    res.redirect("/cart");
});

module.exports = router;