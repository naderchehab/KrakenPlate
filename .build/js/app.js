requirejs.config({paths:{jquery:"../lib/jquery/dist/jquery.min",bootstrap:"../lib/bootstrap/dist/js/bootstrap.min"},useStrict:!0}),define("config",function(){}),require(["config"],function(){require(["jquery","bootstrap"],function(e){var t={initialize:function(){console.info("intialized view")}};t.initialize()})}),define("app",function(){});