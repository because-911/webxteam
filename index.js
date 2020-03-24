const http = require("http"),
  express = require("express"),
  app = express();

app.get("/", (request, response) => {
  console.log(Date.now() + " пинг получен");
  response.sendStatus(200);
});

app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

global.client = new (require("discord.js").Client)();
global.fs = require("fs");
const { Mongo } = require("discore.js");
global.Mongo = Mongo;
global.env = require("dotenv").config(); //Модуль для работы с .env файлом.
global.MongoDB = new Mongo(process.env.MongodbURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
global.config = require("./botconfig.json");
global.Discord = require("discord.js");
global.serverID = config.serverID;
global.colors = config.colors;
global.strftime = require("strftime");
global.commands = new Map();
global.MongoDB = new Mongo(process.env.MongodbURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

new Promise(async resolve => {
  await MongoDB.open();
  const MongoClient = require("mongodb").MongoClient;
  const mongoClient = new MongoClient(process.env.MongodbURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  await mongoClient.connect(function(err, client) {
    client.client = client;
    global.db = client.client.db("Lovely");
    return db;
  });
  resolve();
}).then(() => {
  try {
    require("fs")
      .readdirSync("./DataBase/")
      .filter(file => file.endsWith(".js"))
      .map(i => {
        try {
          require("./DataBase/" + i);
        } catch (e) {
          console.error(e.stack);
        }
      });
  } catch (err) {
    console.error(err.stack);
  }
  try {
    require("fs")
      .readdirSync("./Functions/")
      .filter(file => file.endsWith(".js"))
      .map(i => {
        try {
          require("./Functions/" + i);
        } catch (e) {
          console.error(e.stack);
        }
      });
  } catch (e) {
    console.error(e.stack);
  }
});
