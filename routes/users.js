var express = require('express');
var router = express.Router();

const EmployeeControllers = require("../controllers/EmployeeControllers");

/* GET users listing. */
router.get('/', EmployeeControllers.index);
/* GET users listing. */
router.get('/create', EmployeeControllers.create);

router.get('/employedata', EmployeeControllers.employedata);
module.exports = router;

