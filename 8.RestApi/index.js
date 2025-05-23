const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

app.use(express.urlencoded({ extended: true })); // ye post use krne k liye likha hain ye incode data read karega

app.set("view engine", "ejs"); // set the views engin to ejs
app.set("views", path.join(__dirname, "/views")); // set the view directory

app.use(express.static(path.join(__dirname, "public")));

// let make data

let post = [
  {
    username: "apnacollage",
    content: "I Love Coding",
  },
  {
    username: "rakeshmahato",
    content: "Hard Work",
  },
  {
    username: "rakesh",
    content: "I got selected my first internship",
  },
];


// incoming  Data 


app.get("/posts", (req, res) => {
  // res.send("serving working well!");
  res.render("index.ejs", { post }); //index.ejs wala file ka data posts kr dega webpage mein
});

// post send the form to server

app.get("/posts/new", (req, res) => {
  res.render("new.ejs");                        /// ye done hain get se form create ho rha hani new.ejs se file le aa rha hain
});

// new post ko accept karega // new post display hoga

app.post("/posts", (req, res) => {
  console.log(req.body);
let {username, content} = req.body;
  post.push({username,content});   // new post ko push kr diya post array mein
  res.redirect('/posts')   // push hone k baad redirect kr dega posts url mein
  res.send("you have upload the post");
});

app.listen(port, () => {
  console.log(`Listening the post: ${port}`);
});
