const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("login,metodo GET");
});

router.post('/' , function(req,res, next ){
  res.send ("login,metodo POST");
})
module.exports = router;
