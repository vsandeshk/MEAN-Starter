let mysql = require('mysql');

var pool = mysql.createPool({
//    connectionLimit: 5,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'test'
});

module.exports.addData = function(insertQuery, valuesArr, res){
  let query = mysql.format(insertQuery,valuesArr);

  pool.query(query,(err, data) => {
      if(err) {
        res.status(400).json("Error! cannot connect to database");
        return;
      }
      console.log(data);
      res.status(200).json("Data Added Successfully!");
  });
}

module.exports.query = function(query, res){

  pool.query(query,(err, data) => {
      if(err) {
        res.status(400).json("Error! cannot connect to database");
        return;
      }
      res.status(200).json(data)
  });
}
