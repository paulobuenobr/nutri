var http = require('http')
    ,app = require('./config/express');
    db = require('./config/database');

http.createServer(app).listen(3003, function() {
    console.log('Servidor estutando na porta: ' + this.address().port);
    // CORS
    app.all('/*', function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "X-Requested-With");
        res.header("Access-Control-Allow-Methods", "GET, POST","PUT");
        next();

    });
});

