var http = require('http'),
    fs = require('fs');


http.createServer(function(request, response) {
    var url = request.url;
    console.log('url ***',url);
    if(url =='/bundle-main.css'){
        response.writeHeader(200, {"Content-Type": "text/css"});  
        fs.readFile('./dist/bundle-main.css', function (err, css) {
            if (err) {
                throw err; 
            }
            response.end(css);  
        });

    }else if(url =='/bundle-main.bundle.js'){
        response.writeHeader(200, {"Content-Type": "application/javascript"});  
        fs.readFile('./dist/bundle-main.bundle.js', function (err, js) {
            if (err) {
                throw err; 
            }
            response.end(js);  
        });

    }else{
        response.writeHeader(200, {"Content-Type": "text/html"});  
        fs.readFile('./dist/index.html', function (err, html) {
            if (err) {
                throw err; 
            }
    
            response.write(html);  
            response.end();  
        });
    }

}).listen(3000);
console.log('server listen on 3000')