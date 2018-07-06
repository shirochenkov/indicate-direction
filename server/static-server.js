const path = require("path");
const express = require("express");
const MobileDetect = require('mobile-detect');

const app = express();
const port = process.env.PORT || 8000;

const mainPath = path.join(__dirname, '../');
app.use(express.static(mainPath));

const pathDesktop = path.resolve(__dirname, "../views/desktop.html");
const pathMobile = path.resolve(__dirname, "../views/mobile.html");


app.get('/', (request, response) => {
  const md = new MobileDetect(request.headers['user-agent']);

  const pathCurrent = md.mobile() ? pathMobile : pathDesktop;

  response.sendFile(pathCurrent);
});

app.listen(port, (err) => {
  if (err) {
    return console.log("something bad happened", err)
  }
  console.log(`server is listening on ${port}`)
});

