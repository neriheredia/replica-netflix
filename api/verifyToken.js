const jwt = require("jsonwebtoken");

function verify(req, res, next) {
    let authHeaderBody
    let authHeader

    if(req.body.headers) authHeaderBody = req.body.headers.token
    if(req.headers) authHeader = req.headers.token
    
    if (authHeader) {
        const token = authHeader.split(" ")[1];

        jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
            if (err) res.status(403).json("Token is not valid!");
            req.user = user;
            next();
        });
    } else if (authHeaderBody){
        const token = authHeaderBody.split(" ")[1];

        jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
            if (err) res.status(403).json("Token is not valid!");
            req.user = user;
            next();
        });
    }
    else {
        return res.status(401).json("You are not authenticated!");
    }
}

module.exports = verify;
