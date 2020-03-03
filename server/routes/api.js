var express = require('express')
var router = express.Router()
const Employee = require('../models/employee')    

router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})

//getdata Employee
router.get('/', function (req, res) {
  Employee.find({}).then(result=>{
    res.send(result)
  });
})

// get Employee id
router.get('/:id', function (req, res) {
  Employee.find({_id:req.params.id}).then(result=>{
    res.send(result)
  });
})

// create data Employee
router.post('/crate', function (req, res) {
  const employee = new Employee(
    req.body
  );
  employee.save().then(response=>{
    res.json(response)
  })
})

// update data Employee
router.put('/update/:id', function (req, res) {
  Employee.where({_id:req.params.id}).update(req.body).then(result=>{
    res.json(result)
  })
})

// delete Employee
router.delete('/delete/:id', function (req, res) {
  Employee.remove({_id:req.params.id}).then(response=>{
    res.json(response)
  });
})


module.exports = router