module.exports = (req, res, next) => {
    if (req.method === 'POST' && req.path === '/login') {
        if (req.body.username === 'client@zup.com.br' && req.body.password === '123') {
            res
                .status(200)
                .json(
                    {
                        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ",
                        role: "client"
                    })
        } else if(req.body.username === 'admin@zup.com.br' && req.body.password === '123'){
            res
                .status(200)
                .json({
                    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ",
                    role: "admin"
                })
        }else {
            res.status(401).json({error: 'wrong password'})
        }
    } else {
        next()
    }
}