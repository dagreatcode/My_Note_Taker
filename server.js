// Dependencies
// =============================================================
const express = require("express");
const fs = require("fs");
const path = require("path");

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 3000;

//Middle Wear
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/api/notes", function (req, res){
  console.log(req.body);
  fs.readFile("./db.json", "utf-8", (err, data) => {
      if(err) {
        console.log(err);
        return res.status(500).json({
            error: true,
            data: null,
            message: "Error"
        })
      }
      console.log(data);
      const updatedData = Json.parse(data);
      updatedData.push(req.body);
      console.log(updatedData);
      fs.writeFile("./db.json", JSON.stringify(updatedData), (err) => {
        if(err) throw err;
        res.json({
            error: false,
            data: null,
            message: "It Works"
        })
      })
  })
});

app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`);
});

//Middle Wear
// Sets up the Express app to handle data parsing

//SETUP ROUTES
//Get Route
//* GET `/api/notes` - Should read the `db.json` file and return all saved notes as JSON.

//Post Route
//* POST `/api/notes` - Should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client.

//Delete
//  * DELETE `/api/notes/:id` - Should receive a query parameter containing the id of a note to delete. This means you'll need to find a way to give each note a unique `id` when it's saved. In order to delete a note, you'll need to read all notes from the `db.json` file, remove the note with the given `id` property, and then rewrite the notes to the `db.json` file.
