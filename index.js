const express = require('express');
const bd = require('body-parser');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const port = 5000;
let authModel = require('./authSchema');
// const { response } = require('express');


app.use(cors());
app.use(bd.urlencoded({
    extended:false
}))

app.use(bd.json());

mongoose.connect('mongodb+srv://GhulamQadir:admin2356@cluster0.qt2bg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
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




// "contact": 8121234566,
    // "education": ["Hafiz", "School", "College"],
    // "post": {
    //     "postName": "post1",
    //     "postData": "20-August"
    // }