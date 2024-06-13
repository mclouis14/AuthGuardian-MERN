const User = require('../models/user')

const test = (req, res) => {
    res.json('test is working')
}

const signupUser = async (req, res) => {
    try {
        const {name, email, password, confirmPassword, dateOfBirth, gender} = req.body;
        // Check if name was entered
        if(!name) {
            return res.json({
                error: 'name is required'
            })
        };
        // Check if password is good
        if(!password || password.length < 6){
            return res.json({
                error: 'Password is required and should be at least 6 characters long'
            })
        };
        // Check if password and confirmPassword match
        if (password !== confirmPassword) {
            return res.json({
                error: 'Passwords do not match' 
            })
          };
        // Check email
        const exist = await User.findOne({email});
        if(exist) {
            return res.json({
                error: 'Email is taken already'
            })
        }

        const User = await User.create ({
            name, email, password, dateOfBirth, gender
        })

        return res.json(User)
    } catch { (error)
        console.log(error)
    }
}

module.exports = {
    test,
    signupUser
}