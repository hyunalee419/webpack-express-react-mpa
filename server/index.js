const path = require('path');

const express = require('express');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname,'../dist')));

app.get('/', (req, res) => {
	res.sendFile('templates/index.html', { root: '.' });
});

app.get('/about', (req, res) => {
	res.sendFile('templates/about.html', { root: '.' });
});

app.listen(port, () => {
	console.log('http://localhost:3000')
});
