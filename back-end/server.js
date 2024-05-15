
// Load .env variables (locally only)
if (process.env.NODE_ENV != 'production'){
    require("dotenv").config();
}

// Import dependencies 
const express = require('express');
const cors = require('cors');       // Accepts requests from any domain 
const connectDB = require('./config/database.js'); 
const userController = require('./controllers/user-controller.js');

// Create an express app 
const app = express();
app.use(cors());

// Configure express app 
app.use(express.json());

// Connect to database 
connectDB();

// Routing
// Fetch the planned expenses 
app.get('/userprofiles', userController.fetchUsers );
// Fetch a single note from ID
app.get('/userprofiles/:id', userController.fetchUser );
// Create the planned expense (post creates, accepts info through req body)
app.post('/userprofiles', userController.createUser );
// Fetch and update a single planned expense 
app.put('/userprofiles/:id', userController.updateUser );
// Delete a note 
app.delete('/userprofiles/:id', userController.deleteUser );


// Start the server 
app.listen(process.env.PORT);