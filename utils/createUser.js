const { User } = require('../models')
const { createPassword } = require('../api/bcrypt')
const  userSettings = require('../user_settings')

setTimeout(async () => {
    let username = process.argv[2]
    let password = process.argv[3]
    console.log(`your message is ::\n username:${username}\n password:${password}\n super:true`)
    if (!(username && password)) {
        console.log('Please input right message')
        return
    }
    let user = await User.create({
        username:username,
        password:createPassword(password,userSettings.bcrypt_salt),
        super: true
    })
    console.log(user)
}, 2000)

