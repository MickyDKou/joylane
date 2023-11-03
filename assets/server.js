const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.post('/login', (req, res) => {
    const username = req.body.uname;
    const password = req.body.psw;
    // Here you should implement your logic to check the username and password
    // For now, we just send a message back
    res.send(`Username: ${username}, Password: ${password}`);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
app.post('/signup', (req, res) => {
    const username = req.body.uname;
    const password = req.body.psw;
    // Here you should implement your logic to create a new user
    // For now, we just send a message back
    res.send(`Username: ${username}, Password: ${password}`);
});