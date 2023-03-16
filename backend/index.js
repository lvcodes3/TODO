const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 5000;

// middleware
app.use(cors());
app.use(express.json());

const todoRoutes = require('./todo/routes');



// main route that leads to imported sub-routes //
app.use('/todo', todoRoutes);



app.listen(PORT, () => {
    console.log(`Server started listening on port ${PORT}.`);
});