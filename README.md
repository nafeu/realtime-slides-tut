# Realtime Slides with Socket.io Tutorial

Demonstration project for a realtime presentation slides application tutorial

## Installation / Offline Usage

```
git clone https://github.com/nafeu/realtime-slides-tut.git [PROJECT_NAME]
cd [PROJECT_NAME]
npm install
node server.js
```

#### Presentation View

Open `localhost:8000` in your browser

#### Live Edit View

Open `localhost:8000/edit` in another window or `[LOCAL_IP_ADDRESS]:8000/edit` on any device (computer, tablet or phone) that is on the same LAN.

## Online Usage

#### Deploy On Heroku

```
heroku create
git push heroku master
heroku features:enable http-session-affinity
```

#### Delete Heroku App


## Credits

Nafeu Nasir

## License

MIT