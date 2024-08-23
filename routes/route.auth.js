const { Router } = require('express');
const jwt = require('jsonwebtoken');
const {auth} = require('../middleware/auth');
const {JWT_SECRET,expiresIn} = require('../middleware/auth');

const router = Router();

const username = 'username';
const password = 'password';

router.post('/login',(req,res)=>{
    const {username:user,password:pass} = req.body;
    if(user === username && pass === password){
        const token = jwt.sign({username:user},JWT_SECRET,{expiresIn});
        return res.status(200).json({token});
    }
    res.status(401).json({message:"Invalid username or password"});
});

router.get('/protected',auth,(_req,res)=>{
    res.status(200).json({message:"You Shall pass!"})
})

module.exports= router;