module.exports = app => {
    const express = require('express')
    const router = express.Router()
    const User = require('../../models/user')
    router.post('/login', async (req, res) => {
        const {username, password} = req.body
        console.log(username, password)
        await User.create(req.body)
    })
    app.use(router)

    router.post('/register', async (req, res) => {
        const {username, password, email} = req.body
        console.log(username, password, email)
        const emailUser = await User.findOne({email})
        console.log(emailUser);
    })
}