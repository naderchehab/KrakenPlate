(function(){dust.register("layouts/master",body_0);function body_0(chk,ctx){return chk.write("<!DOCTYPE html><html lang=\"en\"><head><meta charset=\"utf-8\"/><title>").block(ctx.getBlock("title"),ctx,{},null).write("</title><meta name=\"description\" content=\"KrakenPlate: Kraken.js + Backbone.js + Require.js + Bootstrap Boilerplate\"><link rel=\"stylesheet\" href=\"lib/bootstrap/dist/css/bootstrap.min.css\"/><link rel=\"stylesheet\" href=\"lib/bootstrap/dist/css/bootstrap-theme.min.css\"/><link rel=\"stylesheet\" href=\"css/app.css\"/></head><body><nav class=\"navbar navbar-default\" role=\"navigation\"><div class=\"container-fluid\"><div class=\"navbar-header\"><button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\"data-target=\"#bs-example-navbar-collapse-1\"><span class=\"sr-only\">Toggle navigation</span><span class=\"icon-bar\"></span><span class=\"icon-bar\"></span><span class=\"icon-bar\"></span></button><a class=\"navbar-brand\" href=\"#\">KrakenPlate</a></div><div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\"><ul class=\"nav navbar-nav\"><li class=\"active\"><a href=\"index\">Home</a></li><li><a href=\"send-money\">Send Money</a></li><li><a href=\"transaction-history\">Transaction History</a></li></ul></ul></div><!-- /.navbar-collapse --></div><!-- /.container-fluid --></nav><div id=\"wrapper\">").block(ctx.getBlock("body"),ctx,{},null).write("</div><script data-main=\"/js/app\" src=\"lib/requirejs/require.js\"></script></body></html>");}return body_0;})();