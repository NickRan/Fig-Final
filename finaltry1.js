var meme=false;

var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var request = require('request');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());





app.use(function (req, res) {
  console.log("Received a chat message:");
  res.send(meme);
    
});


app.listen(process.env.PORT);
console.log("started listening for messages")






    
    setInterval(function(){
        //checking tristen
        console.log('checking')
        request.get('https://groupme-bot-starter-tristenhuddleston.c9.io/checkdone',{}, function(err, http, body) {
            console.log(body)
            if(body!= 'no'){
                
    request.post("https://api.imgflip.com/caption_image",   
     {
        form: {
                template_id: "101470",
                text0:"API's",
                username:"HoneyBadger024",
                password:"Rancilio8224",
            }
        }, function(err, http, body) {
            console.log(JSON.parse(body)['data']['url']);
       
        meme=JSON.parse(body)['data']['url'];
       
        }
        
        
    );
        
            }
        })
    },1000);
