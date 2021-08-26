const express = require("express")
const router = require('./router/router.js')
const bodyParser = require("body-parser");

const app = express()
const PORT = 5000

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(express.json())
app.use(router)

const start = () => {
    try {
        app.listen(PORT, () => {
            console.log(`Server started.`)
        })
    } catch(e) {
        console.log(e)
    }
}

start()