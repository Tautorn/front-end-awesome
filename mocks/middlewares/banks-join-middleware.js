module.exports = (req, res, next) => {
    if (req.method === 'GET' && req.path === '/refunds') {

            res.status(200).json({token: "test"})
    } else {
        next()
    }
}