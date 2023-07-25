const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("HOME,metodo GET");
});

router.post('/' , function(res,res, next ){
  res.send ("HOME,metodo POST");
})
module.exports = router;
