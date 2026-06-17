const jwt = require("jsonwebtoken");

module.exports = function(req,res,next){
    let token = req.cookies.token;
    if(!token){
        return res.redirect("/owners/login");
    }
    try{
        let data = jwt.verify(token, process.env.JWT_KEY);
        req.owner = data;
        next();
    }
    catch(err){
        return res.redirect("/owner-login");
    }
}