const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const io = require('socket.io');

// ---------------------------------------------------------------------------
// Configuration
// ---------------------------------------------------------------------------

const app = express();
const server = http.Server(app);

server.listen(process.env.PORT || 8000, () => {
  console.log(`[ server.js ] Listening on port ${server.address().port}`);
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set('view engine', 'ejs')

// ---------------------------------------------------------------------------
// Socket Event Listeners
// ---------------------------------------------------------------------------

io.on('connection', (socket) => {
  console.log(`[ server.js ] ${socket.id} connected`);

  socket.on('disconnect', () => {
    console.log(`[ server.js ] ${socket.id} disconnected`);
  });
});

// ---------------------------------------------------------------------------
// Routes
// ---------------------------------------------------------------------------

app.get('/', (req, res) => {
  res.render('show');
})

app.get('/edit', (req, res) => {
  res.render('edit');
})