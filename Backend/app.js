// .env config
const dotenv = require('dotenv');
dotenv.config();

//server pkg
const express = require('express');
//cors pkg
const cors = require('cors');
//server inst
const app = express();
//middelware pkg for cookie parsing and db
const cookieParser = require('cookie-parser');
const connectToDb = require('./db/db');
//router
const userRoutes = require('./routes/user.routes');
const captainRoutes = require('./routes/captain.routes');
const mapsRoutes = require('./routes/maps.routes');
const rideRoutes = require('./routes/ride.routes');
//db connect
connectToDb();
//configure middelware 
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


// home routes 
app.get('/', (req, res) => {
    res.send('Hello World');
});
//other route
app.use('/users', userRoutes);
app.use('/captains', captainRoutes);
app.use('/maps', mapsRoutes);
app.use('/rides', rideRoutes);



//exported initialized server instance 
module.exports = app;

