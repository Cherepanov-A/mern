const express = require('express')
const config = require('config')
const app = express()
const mongoose = require('mongoose')

app.use('/api/auth',require('./routes/auth_routes'))

const PORT = config.get('port') || 4000

async function start() {
    try {
        await mongoose.connect(config.get('mongoUri'), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })
    } catch (e) {
        console.log('Server error', e.measure())
        process.exit()
    }
}

app.listen(PORT, () => console.log(`Server has been started at port ${PORT}`))