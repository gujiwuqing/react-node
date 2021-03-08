module.exports = app => {
    const express = require('express')

    const router = express.Router()

    router.post('/user/add', async (req, res) => {
        const {realName, age, sex} = req.body
        console.log(realName, age, sex);
    })
    app.use(router)
}