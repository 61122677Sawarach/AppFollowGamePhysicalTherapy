//Run node of Customer
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const connection = mysql.createPool({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'app_follow_game_pt'
});

const app = express();
app.get('/FollowGamePT', function (req, res) {
    connection.getConnection(function (err, connection) {

    connection.query('SELECT * FROM FollowGamePT', function (error, results, fields) {
     
      if (error) throw error;
      res.send(results)
    });
  });
});

app.listen(3001, () => {
 console.log('Go to http://172.18.132.107/FollowGamePT so you can see the data.');
});