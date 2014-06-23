'use strict';

require(['config'], function() {
    require(['jquery', 'bootstrap'], function ($) {

        var app = {
            initialize: function () {
                console.info('intialized view');
            }
        };
        app.initialize();
    });
});
