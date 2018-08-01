import { Router } from 'express'
import { User } from '../model/userModel'
const router = Router()

router.get('/', (req, res, next) => {
    User.findAll().then( users => {
        res.json({ users: users })
    });
});

router.get('/info', (req, res, next) => {
    var emailInput = req.query.email ? req.query.email : ''
    // var queryAttributes = ['firstName', 'lastName', 'email']
    var query = { where : { email: emailInput } }
    User.findOne(query).then(user => {
        if(user)
            res.json({ userInfo: user })
        else
            res.json({ message: "User doesn't exist" })
    });
})

router.post('/newUser', (req, res, next) => {
    var newUser = req.body
    // var queryAttributes = ['firstName', 'lastName', 'email']
    User.findOne({ where: { email : newUser.email }}).then( user => {
        if( !user || Object.keys(user).length === 0 ){
            User.create(newUser).then( data => {
                res.json({ updatedInfo : data.dataValues, message : "Succesfully added" })
            })
        } else {
            res.json({ message: "User already exists"})
        }
    })
})

router.post('/update', (req, res, next) => {
    
})

module.exports = router;