// get the client
const mysql = require('mysql2');

// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: ''
});

const dumpData = () => {
  return new Promise(resolve => {
    connection.query('select * from sample.sample', (err, results)=> {
      if(results.length === 0) {
        connection.query('insert into sample.sample values(1,"sample")', (err, res)=> {
          return resolve();
        })
      }
      resolve();
    })
  })
}

connection.query('CREATE DATABASE IF NOT EXISTS sample', async() => {
  console.log('DB INITIALIZED')

  connection.query('CREATE TABLE IF NOT EXISTS sample.sample (id INT NOT NULL AUTO_INCREMENT, name VARCHAR(255), PRIMARY KEY (id))');
  let m1= `CREATE TABLE IF NOT EXISTS staff (id int PRIMARY KEY,faculty_id varchar(255),faculty_name varchar(255),date_of_birth varchar(255),date_of_joining varchar(255),email_id varchar(255),mobile_number int,gender varchar(255))`

  connection.query(m1);
  console.log('staff > TABLE CREATED')
  console.log('TABLE CREATED');

  // await dumpData().catch();
  process.exit(0);
});
