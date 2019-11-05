"use strict";
const  express  =  require('express');
const  bodyParser  =  require('body-parser');
const  app  =  express();
const cors = require('cors')
//const  router  =  express.Router();

app.use(bodyParser.urlencoded({ extended:  false }));
app.use(bodyParser.json());
app.use(cors())
const userRoutes = require('./routes/user')
require('./setup')
app.use(userRoutes);
const  port  =  process.env.PORT  ||  3000;


app.listen(port, () => {
    console.log('Server listening at http://localhost:'  +  port);
});