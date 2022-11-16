const jwt = require('jsonwebtoken')
const {UnauthenticatedError} = require('../errors')

const authorization =async(req,res,next)=>{
    const auth = req.headers.authorization

if(!auth || !auth.startsWith('Bearer')){
    throw new UnauthenticatedError('Invalid authorization header provided')
}
const token = auth.split(' ')[1]
try{
const decoded = jwt.verify(token,process.env.JWT_SECRET,{expireIn:'2d'})
const {id,name} = decoded
req.user = {id,name}
next()

}catch(err){
    throw new UnauthenticatedError('Unauthorization denied')
} 

}

module.exports = authorization