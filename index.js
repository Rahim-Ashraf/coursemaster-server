const express = require('express')
require('dotenv').config()
const cors = require('cors')
const connectDB = require('./config/db');

// Connect to database
connectDB();

const app = express();
app.use(cors({
    origin: 'http://localhost:3000'
}));

app.use(express.json())

const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('CourseMaster Server is running');
});

// Routes
app.use('/api/auth', require('./routes/api/auth'));

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
