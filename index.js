const express = require('express')
const mongoose = require('mongoose')
const authRouter = require('./authRouter')
const PORT = process.env.PORT || 5000

const app = express()

app.use(express.json())
app.use("/auth", authRouter)

const start = async () => {
    try {
        await mongoose.connect(`mongodb+srv://qwerty:qwerty123@cluster0.ibnux.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, {useUnifiedTopology: true, useNewUrlParser: true})
        app.listen(PORT, () => console.log(`server started on port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start()