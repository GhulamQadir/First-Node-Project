const express = require('express');
const bd = require('body-parser');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const port = 5000;
let authModel = require('./authSchema');
const ey = require('./')
const dotenv = require("dotenv");
dotenv.config({ path: "./key.env" });


app.use(cors());
app.use(bd.urlencoded({
    extended:false
}))

app.use(bd.json());

mongoose.connect(process.env.url, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on("connected", () => {
    console.log("Database connected")
})

mongoose.connection.on("error", () => {
    console.log("Database not connected")
})

app.get('/', (req, res) => {
    res.send('<center><br><br>Started learning backend technology<br>Ghulam Qadir</center>')
})

app.post('/signUp', (req, res) => {
    // res.send("SignUp API")
    // console.log(req.body.education[1])
    let userCreate = new authModel({email: req.body.email, password: req.body.password})
    userCreate.save()
    .then((response) => {
        // console.log(response, 'response success')
        res.status(200).send({result: response, message: "Data stored successfully"})
    })
    .catch((err) => {
        // console.log(err, 'err')
        res.status(400).send({result: err.message, message: "Data not stored successfully"})
    })
})

app.listen(port, () => {
    console.log('Server is Running!')
})

