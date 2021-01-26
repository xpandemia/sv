//http://localhost/phpmyadmin
//!! before: sudo service apache2 restart

const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "test",
  password: "mysqldbqwe"
});

const sql = `create table if not exists users(
  id int primary key auto_increment,
  name varchar(255) not null,
  age int not null
)`;

connection.query(sql, function(err, results) {
    if(err) console.log(err);
    else console.log("Таблица создана");
});
connection.end();
