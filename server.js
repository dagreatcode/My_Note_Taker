// Dependencies
// =============================================================
const express = require("express");
const fs = require("fs");
const path = require("path");
const notes =  require("./db/db.json");

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 3000;

//Middle Wear
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

//SETUP ROUTES
//Get Route
//* GET `/api/notes` - Should read the `db.json` file and return all saved notes as JSON.

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.get("/notes", function(req, res) {
  res.sendFile(path.join(__dirname, "./public/notes.html"));
});

app.get("/api/notes", function(req, res) {
  res.json(notes);
});

//Post Route
//* POST `/api/notes` - Should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client.

app.post("/api/notes", function (req, res){

});

//Delete
//  * DELETE `/api/notes/:id` - Should receive a query parameter containing the id of a note to delete. This means you'll need to find a way to give each note a unique `id` when it's saved. In order to delete a note, you'll need to read all notes from the `db.json` file, remove the note with the given `id` property, and then rewrite the notes to the `db.json` file.

app.delete("/api/notes", function (req, res){
  
});

app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`);
});