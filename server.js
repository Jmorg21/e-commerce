const express = require('express');
const routes = require('./Develop/routes/api');
const sequelize = require('./Develop/config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: ''
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
})