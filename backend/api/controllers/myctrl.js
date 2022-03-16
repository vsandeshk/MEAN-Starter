const data = require("../database/data.json");
var dbCon = require("../database/database-con.js");

module.exports.getData = function(req, res) {

  let query = "Select * from Employees";
  dbCon.query(query, res);

}

module.exports.addData = function(req, res) {

  let userId = req.body.userId;
  let jobTitle = req.body.jobTitle;
  let firstName = req.body.firstName;
  let lastName = req.body.lastName;
  let employeeCode = req.body.employeeCode;
  let region = req.body.region;
  let phoneNumber = req.body.phoneNumber;
  let emailAddress = req.body.emailAddress;

  let query = "INSERT INTO Employees";
  query += "(userId, jobTitle, firstName, lastName, employeeCode, region, phoneNumber, emailAddress)";
  query += "VALUES (?,?,?,?,?,?,?,?)";
  let valuesArr = [userId, jobTitle, firstName, lastName, employeeCode, region, phoneNumber, emailAddress];
  dbCon.addData(query, valuesArr, res)

}

module.exports.getDataById = function(req, res) {
  let id = req.params.id;
  let query = "Select * from Employees where userId = '"+id+"'";
  dbCon.query(query, res);
}
