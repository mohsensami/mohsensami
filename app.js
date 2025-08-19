const path = require('path')
const express = require('express')
const app = express()
const port = 3000

// Set EJS as the view engine
app.set('view engine', 'ejs')
app.set('views', 'views')

//* Static Folders
app.use('/public', express.static(path.join(__dirname, 'public')))

// Define a route for the home page
app.get('/', (req, res) => {
  res.render('index', {
    title: 'Hello World',
    message: 'Welcome to Express with EJS!',
  })
})
app.get('/api', (req, res) => {
  res.json({
    status: true,
    message: 'Hello from expressjs',
    id: Date.now(),
  })
})

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})
