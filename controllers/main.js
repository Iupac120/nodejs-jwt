const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const {BadRequestError} = require('../errors')


const dashBoard =async(req,res)=>{
    const luckyNumber = Math.floor(Math.random()*100)
   const{id, name} = req.user
   console.log(req.user)
    res.status(201).json({msg:`${name} of id:${id} has a lucky number of ${luckyNumber}`})
  }



const login =async(req,res)=>{
  const {name,password} = req.body
  if(!name || !password){
    throw new BadRequestError('Please provide the name and passowrd')
  }  

const id = new Date().getDate()
const token = jwt.sign({id,name},process.env.JWT_SECRET,{expiresIn:'4d'})
res.status(201).json({msg:{name:`${name} name has been created`},token})
}

module.exports = {
    dashBoard,
    login
}