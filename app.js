const express = require('express');

const user_routes = require('./routes/expense');

const bodyParser = require('body-parser');

const cors = require('cors');

const sequelize = require('./data/database');

const app = express();

app.use(cors());

//
app.use(bodyParser.json({extended:false}));

app.use(user_routes);

sequelize.sync()
.then((res)=>{
    console.log(res);
    app.listen(3000);
})
.catch(err=>console.log(err));
