const jwt = require('jsonwebtoken');

function jwtProtected(req, res, next) {
    // Saca el token del header y 
    const authHeader = req.headers['authorization']
    // NOTE: Esta condicional es de las cosas lindas que solo pasan en JS jajaja
    const token = authHeader && authHeader.startsWith("Bearer") && authHeader.split(' ')[1]
    if (token == null) return res.sendStatus(401)

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) return res.sendStatus(403)
        req.user = user
        next()
    });
}

module.exports = {
    jwtProtected,
}