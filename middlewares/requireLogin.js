module.exports = (req, res, next) => {
    if (!req.user){
        return res.status(401).send({error: 'You must log in!'});
    }

    next();
};
//next is the callback after the module is executed. calling "next" will pass the request onto the second middleware
