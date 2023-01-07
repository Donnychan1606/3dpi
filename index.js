var fs = require('fs');
var https = require('https');
var http = require('http');

var options = {
    key: fs.readFileSync('Nginx/2_dpidpidpi.com.key'),//配置自己的证书
    cert: fs.readFileSync('Nginx/1_dpidpidpi.com_bundle.crt')//同上
}
 
var server = https.createServer(options).listen(443);
var io = require('socket.io')(server);
