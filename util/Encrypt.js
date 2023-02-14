const bcrypt = require('bcrypt')
const saltRounds = 10
const hashPassword = async(password) =>{
    console.log('...')
    var has1 = await bcrypt.hash(password, saltRounds)
    
    console.log(has1)
    return has1
} 
const comparePassward = async(passward,hashPassward) =>{
    const result = await bcrypt.compare(passward,hashPassward)
    return result;
}
module.exprorts= {hashPassword}

