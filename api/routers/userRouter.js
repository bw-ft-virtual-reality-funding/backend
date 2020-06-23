const router = require("express").Router();
const Users = require('../models/userModel');
const jwt = require('jsonwebtoken');
const bcryptjs = require('bcryptjs');
const { isValid, restricted } = require('../services');
const db = require('../../data/dbConfig');
const secret = require('../secrets');

router.post('/register', (req, res) => {
    const credentials = req.body;

    if (isValid(credentials)){
        const rounds = process.env.BCRYPT_ROUNDS || 10;
         const hash = bcryptjs.hashSync(credentials.password, rounds);

    credentials.password = hash; 

     db("users").insert(credentials)
    .then(id => {
        console.log(id);

        db("users").where({id: id[0] })
        .then(post => {
            
            res.status(201).json(post);
        })
        .catch(err => {
            res.json({err: err.message});
            console.log(err.Error);
        })
    })
    .catch(err => {
        res.json({err: err.message});
        console.log(err);
    })


    } else {
        
            res.status(400).json({msg: 'Please provide username and password as strings.'})
        
    }
})


router.post('/login', (req, res) => {
    const {username, password} = req.body;

    if(isValid(req.body)){
        db("users").where({ username }).first()
        .then(user => {
            if (user && bcryptjs.compareSync(password, user.password) ) {
                const token = generateToken(user);
            
                console.log(token);
            res.status(200).json({ message: `Welcome ${user.username}!`, token});

            } else {
                res.status(401).json({ message: 'Invalid Credentials' });
            }
        })
        .catch(err => {
            res.status(500).json({msg: err});
        })
    } else {
        res.status(400).json({msg: 'Please provide username and password as strings'})

    }
})

function generateToken(user) {
    const payload = {
        subject: user.id,
        username: user.username,
        role: user.role
    }
    const options = {
        expiresIn: '1d'
    }

    return jwt.sign(payload, secret.jwtSecret, options);
}

router.get('/', restricted, (req, res) => {
    Users.find()
    .then(users => {
        res.json(users);
    })
    .catch(err => {
        res.status(400).json({msg: err});
    })
})

module.exports = router;