const express = require("express");
let users=[];

const router = express.Router();

router.route('/')
.get((req,res)=>{
    res.send(users)
})
.post((req,res)=>{
    users.push(req.body.name)
    console.log(`user ${req.body.name} joined!`)
    res.send(`user ${req.body.name} joined!`)
})
.delete((req,res)=>{
    const idx = users.indexOf(req.body.name)
    if (idx > -1) users.splice(idx, 1)
    res.send(`user ${req.body.name} deleted!`)
})
.put(async (req,res)=>{
    users[users.indexOf(req.body.name)]=req.body.newName
    res.send(`user ${req.body.name} has changed into ${req.body.newName}`)
})

module.exports = router;