const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const showdown = require('showdown');

const app = express();
const server = http.Server(app);
const io = require('socket.io')(server);

const converter = new showdown.Converter();

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
// Socket Events
// ---------------------------------------------------------------------------

io.on('connection', (socket) => {
  console.log(`[ server.js ] ${socket.id} connected`);

  socket.on('disconnect', () => {
    console.log(`[ server.js ] ${socket.id} disconnected`);
  });
});

function updateSlide(markdown) {
  io.emit('update slide', converter.makeHtml(markdown));
}

// ---------------------------------------------------------------------------
// API
// ---------------------------------------------------------------------------

app.get('/api/updateSlide', (req, res) => {
  console.log(`[ server.js ] GET request to 'api/updateSlide' => ${JSON.stringify(req.query)}`);

  const { markdown } = req.query;

  if (markdown) {
    updateSlide(markdown);
    res.status(200).send(`Received 'updateSlide' request with: ${markdown}\n`);
  } else {
    res.status(400).send('Invalid parameters.\n');
  }
});

const introSlides = [
  '#Realtime Slides ⏱\nImprovise your presentations, one slide at a time.',
  '#Clever Libraries 🛠\nPowered by Express.js, Socket.io, Showdown and some sweet Vanilla JS',
  '#Have Some Fun! 🎉\nFork this project and experiment with the realtime logic.',
  '#👉 @nafeu\nFollow me at *github.com/nafeu* for more realtime tomfoolery.',
];
