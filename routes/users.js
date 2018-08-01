import { Router } from 'express'
import { User } from '../model/userModel'
import Sequelize from 'sequelize'
const router = Router()

router.get('/', (req, res, next) => {
    User.findAll().then( users => {
        res.json({ users: users })
    }).catch( err => {
        res.json({ error: err })
    });
});

router.get('/info', (req, res, next) => {
    var emailInput = req.query.email ? req.query.email : ''
    var query = { where : { email: emailInput } }
    User.findOne(query).then(user => {
        if(user)
            res.json({ userInfo: user })
        else
            res.json({ message: "User doesn't exist" })
    }).catch(Sequelize.ValidationError, err => {
        res.json({validationerror: Sequelize.ValidationError, error: err })
    });
})

router.post('/newUser', (req, res, next) => {
    var newUser = req.body
    User.findOne({ where: { email : newUser.email }}).then( user => {
        if( !user || Object.keys(user).length === 0 ){
            User.create(newUser).then( data => {
                res.json({ updatedInfo : data.dataValues, message : "Succesfully added" })
            }).catch(Sequelize.ValidationError, err => {
                res.json({validationerror: Sequelize.ValidationError, error: err })
            });
        } else {
            res.json({ message: "User already exists"})
        }
    }).catch(Sequelize.ValidationError, err => {
        res.json({validationerror: Sequelize.ValidationError, error: err })
    });
})

router.post('/update', (req, res, next) => {
    
})

module.exports = router;