const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(request,response){
  response.sendFile(__dirname+"/index.html");
})

app.post("/",function(request,response){
  num1=Number(request.body.num1);
  num2=Number(request.body.num2);
  result=num1+num2
  response.send("THe Answer Is "+result);
})

app.listen(3000, function(){
    console.log("😊主人,內容已更新✔")
  });
  