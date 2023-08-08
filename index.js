const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.redirect(307, 'http://www.local.kurly.com/redirect?to=/goods/1000048706');
});

app.listen(5000, () => {
    console.log('server started');
})