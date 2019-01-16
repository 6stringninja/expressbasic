const express = require('express')
const app = express()
const port = 80

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/hello/:name', function (req, res) {
    res.send('hello ' + req.params.name + '!');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))