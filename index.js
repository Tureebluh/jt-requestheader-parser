var express = require('express');
var app = express();
var path = require('path');
var port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "public")));

app.get('/api', function(req, res){
    
    var ip = String(req.ip).replace(/[A-Za-z]|:/g, '');
    var language = String(req.headers['accept-language']).slice(0, req.headers['accept-language'].indexOf(','));
    var userAgent = String(req.headers['user-agent']);
    var system = userAgent.slice(userAgent.indexOf('(') + 1, userAgent.indexOf(')'));
    var data = {
        'ip-address': ip,
        'language': language,
        'software': system
    };
    res.end(JSON.stringify(data));
});

app.listen(port, function(){
    console.log("\nServer listening on port " + port);
});
