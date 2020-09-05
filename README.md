### Set port in client-app
.env
```
PORT=3000
```

### Set mondodb connection

server\app\config\db.config.js
```
module.exports = {
    HOST: "localhost",
    PORT: 27017,
    DB: "demo_db"
  };
```

## Project setup

In the project directory server and client-app, you can run:

```
npm install
```


### start server and client-app
In server directory

```
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.
