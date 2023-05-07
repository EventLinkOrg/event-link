const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');  // node modules install dependecies 
const bodyParser = require('body-parser');
const createError = require('http-errors');
const category_route = require('./routes/category_route');
const event_route = require('./routes/event_route');
const Activeticket_route = require('./routes/ticket_route');

require('dotenv').config();


const app = express();

const port = process.env.PORT || 4000
console.log(process.env.PORT + "-the port")

app.use(express.json())
app.use(
  express.urlencoded({
    extended: false,
  }),
)
app.use('/category',category_route);
app.use('/event',event_route);
app.use('/activeTicket',Activeticket_route);

// app.use('Event');

//mongoDB connection
//lidhja me db
mongoose
  .connect(process.env.CONNECTION_STRING)
  .then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connection.name}"`)
  })
  .catch((err) => {
    console.error('Error connecting to mongo', err.reason)
  })

/*applying the express json middleware 
so that every request that hits the endpoints,
 their request bodies can be converted to json*/

//if it doesnt work switch to bodyparser
app.use(express.json())
app.use(
  express.urlencoded({
    extended: false,
  }),
)
//app.use(cors());

app.listen(
  port,
  () => console.log(`server running on http://localhost:${port}`)
);

app.use((req, res, next) => {
  next(createError(404))
})

app.use((err, req, res) => {
  console.error(err.message)
  if (!err.statusCode) err.statusCode = 500
  res.status(err.statusCode).send(err.message)
})

