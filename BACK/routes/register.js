const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("register,metodo GET");
});

router.post('/' , function(req,res, next ){
  res.send ("register,metodo POST");
})
module.exports = router;
