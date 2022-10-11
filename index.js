const express       = require('express');
const cors          = require('cors');
const config        = require('./config/config')
var app             = express();
const http          = require("http")
const server        = http.createServer(app)

const env_settings = config.EnvSettings

var todo_router   = require("./routes/todo_router")

app.use(cors());
app.use(
    express.urlencoded({
      extended: true,
    })
  );
app.use(express.json()); 

app.use("/todo",todo_router)


server.listen(env_settings.Port, () => console.log("Express server is running at port no : " + env_settings.Port))