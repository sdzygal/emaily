const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send({ bye: 'there' });
});


app.listen(5000);