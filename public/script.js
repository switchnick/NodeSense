require(['text!./senseconfig.json'], function(config){
  config = JSON.parse(config);
  require.config( {
    baseUrl: ( config.isSecure ? "https://" : "http://" ) + config.host + (config.port ? ":" + config.port: "") + config.prefix + "resources"
  } );
  require( ["js/qlik"], function ( qlik ) {
    qlik.setOnError( function ( error ) {
      alert( error.message );
    } );
    var app = qlik.openApp('<appId>', config);
    app.getObject("qv1", "<objectId>");
  } );
});
