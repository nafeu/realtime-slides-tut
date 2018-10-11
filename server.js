const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');

const app = express();
const server = http.Server(app);
const io = require('socket.io')(server);

// ---------------------------------------------------------------------------
// Configuration
// ---------------------------------------------------------------------------

server.listen(process.env.PORT || 8000, () => {
  console.log(`[ server.js ] Listening on port ${server.address().port}`);
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set('view engine', 'ejs');

// ---------------------------------------------------------------------------
// Routes
// ---------------------------------------------------------------------------

app.get('/', (req, res) => {
  res.render('show');
});

app.get('/edit', (req, res) => {
  res.render('edit');
});

// ---------------------------------------------------------------------------
// API
// ---------------------------------------------------------------------------

app.get('/api/updateSlide', (req, res) => {
  const {query} = req;
  console.log(`[ server.js ] GET request to 'api/update' => ${JSON.stringify(query)}`);

  if (query.text) {
    io.emit('update slide', query.text);
    res.status(200).send(`Received 'updateSlide' request with text: '${query.text}'\n`);
  } else {
    res.status(400).send('Invalid parameters.\n');
  }
})

// ---------------------------------------------------------------------------
// Socket Events
// ---------------------------------------------------------------------------

io.on('connection', (socket) => {
  console.log(`[ server.js ] ${socket.id} connected`);

  socket.on('disconnect', () => {
    console.log(`[ server.js ] ${socket.id} disconnected`);
  });
});