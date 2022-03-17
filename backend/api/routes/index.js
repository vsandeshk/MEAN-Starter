const express = require('express');
const router = express.Router();
const myctrl = require('../controllers/myctrl.js');

router.route('/getData').get((req,res)=>{
  myctrl.getData(req, res);
});

router.route('/addData').post((req,res)=>{

  myctrl.addData(req, res);
});

router.route('/getDataById/:id').get((req,res)=>{
  myctrl.getDataById(req, res);
});

module.exports = router;
