const path = require("path");
const express = require("express");
const mobile = require('is-mobile');

const app = express();
const port = 8080;

const mainPath = path.join(__dirname, '../');
app.use(express.static(mainPath));

const pathDesktop = path.resolve(__dirname, "../views/desktop.html");
const pathMobile = path.resolve(__dirname, "../views/mobile.html");

const pathCurrent = mobile() ? pathMobile : pathDesktop;

app.get('/', (request, response) => {
  response.sendFile(pathCurrent);
});

app.listen(port, (err) => {
  if (err) {
    return console.log("something bad happened", err)
  }
  console.log(`server is listening on ${port}`)
});

