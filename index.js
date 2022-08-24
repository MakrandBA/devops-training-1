const express = require('express');
const port = process.env.port || 8000;
const app = express();

app.get('/', (req, res) => {
    res.send('Hello DevOps welcome this is a wrong test case!');
});

app.listen(port, () => { console.log('App is up & running!'); });
module.exports = app
