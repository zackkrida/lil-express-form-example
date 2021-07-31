const express = require('express');
const path = require('path')

const app = express();
const port = process.env.PORT || 2040;

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.post('/completed', (req, res) => {
	const {email, name, message} = req.body
	// this is where we can do whatever we want
	// with the data server side!
	// today we'll just log it
	console.log(`> New message from ${name} at ${email}:
		${message}
	`)
	res.redirect(`/thanks?name=${name}`)
})

app.get('/thanks', (req, res) => {
  res.send(`<div>Thank you for submitting, ${req.query.name}!<div>`);
});

app.listen(port);
console.log('> Server started at http://localhost:' + port);