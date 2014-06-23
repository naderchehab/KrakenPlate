'use strict';

var kraken = require('kraken-js'),
    app = require('express')(),
    options = {
        onconfig: function (config, next) {
            //any config setup/overrides here
            next(null, config);
        }
    },
    port = parseInt(process.env.PORT, 10)  || 3000;

app.use(kraken(options));

app.listen(port, function (err) {
    console.log('[%s] Listening on http://localhost:%d', app.settings.env, port);
});