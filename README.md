# Real-time Presentation Slides with Socket.io, Node.js and Javascript

Demo project for a blog post on building a real-time presentation slides app.

## Installation

```
git clone https://github.com/nafeu/realtime-slides-tut.git [PROJECT_NAME]
cd [PROJECT_NAME]
npm install
```

## Offline Usage

To start the application, run `npm start` inside the project directory.

#### Presentation View

Open `localhost:8000` in your browser

#### Live Edit View

Open `localhost:8000/edit` in another window or `[LOCAL_IP_ADDRESS]:8000/edit` on any device (computer, tablet or phone) that is on the same LAN.

## Online Usage

#### Deploy On Heroku

```
heroku create
heroku features:enable http-session-affinity
git push heroku master
```

Open the generated `[APP_URL]` and try it out, connect to the `/edit` page on a separate device and enjoy your new realtime presentation slides solution.

#### Delete Heroku App

Make sure you are in the correct project directory.

```
heroku apps:destroy
```

Follow the rest of the CLI prompt.

## Credits

Nafeu Nasir

## License

MIT