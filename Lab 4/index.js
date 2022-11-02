const express = require("express"),
app = express();
app.set("port", process.env.PORT || 3000);
app.use(express.static(__dirname));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
  var url = req.url;
  var date = new Date();
  console.log("Request recieved for page", url," at ", date);
});

app.get("/books.html", (req, res) => {
  res.sendFile(__dirname + "/views/books.html");
  var url = req.url;
  var date = new Date();
  console.log("Request recieved for page", url," at ", date);
});

app.get("/contact.html", (req, res) => {
  res.sendFile(__dirname + "/views/contact.html");
  var url = req.url;
  var date = new Date();
  console.log("Request recieved for page", url," at ", date);
});

app.get("/survey.html", (req, res) => {
  res.sendFile(__dirname + "/views/survey.html");
  var url = req.url;
  var date = new Date();
  console.log("Request recieved for page", url," at ", date);
});

app.get("/books/percy-jackson-and-the-lightening-thief.html", (req, res) => {
  res.sendFile(__dirname + "/views/books list/percy jackson and the lightening thief.html");
  var url = req.url;
  var date = new Date();
  console.log("Request recieved for page", url," at ", date);
});

app.get("/books/percy-jackson-and-the-sea-of-monsters.html", (req, res) => {
  res.sendFile(__dirname + "/views/books list/percy jackson and the sea of monsters.html");
  var url = req.url;
  var date = new Date();
  console.log("Request recieved for page", url," at ", date);
});

app.get("/books/percy-jackson-and-the-titan's-curse.html", (req, res) => {
  res.sendFile(__dirname + "/views/books list/percy jackson and the titan's curse.html");
  var url = req.url;
  var date = new Date();
  console.log("Request recieved for page", url," at ", date);
});

app.get("/books/percy-jackson-and-the-battle-of-the-labyrinth.html", (req, res) => {
  res.sendFile(__dirname + "/views/books list/percy jackson and the battle of the labyrinth.html");
  var url = req.url;
  var date = new Date();
  console.log("Request recieved for page", url," at ", date);
});

app.get("/books/percy-jackson-and-the-last-olympian.html", (req, res) => {
  res.sendFile(__dirname + "/views/books list/percy jackson and the last olympian.html");
  var url = req.url;
  var date = new Date();
  console.log("Request recieved for page", url," at ", date);
});

app.all('*', (req, res) => {
  res.sendFile(__dirname + "/views/404.html");
  var url = req.url;
  var date = new Date();
  console.log("Error occured. Request recieved for page", url," that could not be found on the server. ", date);
});

app.listen(app.get("port"), () => {
  console.log(
    `Server running at http://localhost:${app.get("port")}`
  );
});