const express = require('express');
const bodyParser = require('body-parser');

let app = express();

// Parse JSON (uniform resource locators)
app.use(bodyParser.json());
// Parse forms as well
app.use(bodyParser.urlencoded({extended: true}));

// Declare static files
app.use(express.static(__dirname + '/../client/build'));

// ROUTES --------------------------------------------------

// Should authenticate a user, creating a session token and assigning it
// to this user.
app.post('/login', function(req, res) {});

// Returns a list of all users from the database.
app.get('/users', function(req, res) {});

// Returns user information from the database.
app.get('/users/:username', function(req, res) {});

// Returns all tasks from the database.
app.get('/tasks', function(req, res) {});

// Expects JSON containing all information necessary to create and
// save a new task object to the database.
app.post('/tasks', function(req, res) {});

// Returns information for a single task.
app.get('/tasks/:taskId', function(req, res) {});

// Assign the :taskId task to the current user. Triggered when a user
// accepts/applies to a task.
app.post('/tasks/:taskId/accept', function(req, res) {});

let port = process.env.PORT || 3001;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
