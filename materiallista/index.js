const express = require('express')

const app = express()

// Serve our custom made teaching materials as
// static files
app.use(express.static('public'))

app.get('/', (req, res) => res.sendFile(__dirname + '/public/materiallista.html'))

app.listen(3000, () => console.log('Server listening on port 3000!'))
