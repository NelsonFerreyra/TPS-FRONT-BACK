const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("productos,metodo GET");
});

router.post('/' , function(req,res, next ){
  res.send ("productos,metodo POST");
})
module.exports = router;
