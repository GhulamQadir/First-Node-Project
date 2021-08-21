const express = require('express');
const bd = require('body-parser');
const cors = require('cors');
const app = express();
const port = 5000;


app.use(cors());
app.use(bd.urlencoded({
    extended:false
}))

app.use(bd.json());


app.get('/', (req, res) => {
    res.send('<center><br><br>Started learning backend technology<br>Ghulam Qadir</center>')
})

app.post('/signUp', (req, res) => {
    // res.send("SignUp API")
    console.log(req.body.education[1])
})

app.listen(port, () => {
    console.log('Server is Running!')
})