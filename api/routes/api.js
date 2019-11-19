var express = require('express');
var router = express.Router();

router.get("/", function(req,res){
    res.send("This is the api endpoint");
})

router.get("/getSecurityScan", async function(req,res,next){
    var response =  await getSecurityScan();
        
    res.send( response );
    
});

router.post("/addSecurityScan", async function(req,res){
    console.log(req.body);
    var response = await addSecurityScan(req.body);
    res.send(response);
})

module.exports = router;
