const express = require('express');
const mysql = require('mysql'); //mysqlの読み込み

const app = express();

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'uth!on9ohj4v',
  database: 'list_app',
}); //mysqlの接続情報

connection.connect((err) => {
  if (err) {
    console.log('error connecting: ' + err.stack);
    return;
  }
  console.log('success');
}); //接続できていないときにエラーを表示する

app.get('/', (req, res) => {
  connection.query('SELECT * FROM users', (error, results) => {
    console.log(results);
    res.render('hello.ejs');
  });
});

app.listen(3000); //'/'のルーティング
