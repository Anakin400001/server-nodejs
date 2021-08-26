const Router = require('express')
const users = require('../base/users.json')
const router = new Router()

let start = '/api/'

router.get(start + 'getUser', async(req, res) => {
    if(!req.query.id || !req.query.sign) {
        return res.send({ message: '[ Error #1 ] Forgot id or sign parameter.' })
    }
    if(users.find(x => x.id == req.query.id)) {
         return res.send({ message: '[ Success ] User was found.' })
    }
    else {
         return res.send({ message: '[ Error #2 ] User not found.' })
    }
})

module.exports = router