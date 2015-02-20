// $.getJSON('./senseconfig.json', function(config){
//
// });
// require.config( {
//   baseUrl: ( config.isSecure ? "https://" : "http://" ) + config.host + (config.port ? ":" + config.port: "") + config.prefix + "resources"
// } );

// require(['text!./senseconfig.json'], function(config){
//   config = JSON.parse(config);
//   require.config( {
//     baseUrl: ( config.isSecure ? "https://" : "http://" ) + config.host + (config.port ? ":" + config.port: "") + config.prefix + "resources"
//   } );
//   require( ["js/qlik"], function ( qlik ) {
//     qlik.setOnError( function ( error ) {
//       alert( error.message );
//     } );
//
//     var app = qlik.openApp('ba1944a1-c7e9-469b-a7ce-b7db4c42a534', config);
//     console.log(app);
//     var element = document.getElementById("qv1");
//     app.getObject(element, "PnN");
//
//
//   } );
// });
var config = {
  host: '10.211.55.3',
  prefix: "/nodejs/",
  port: 8080,
  isSecure: window.location.protocol === "https:"
};

require.config( {
  baseUrl: ( config.isSecure ? "https://" : "http://" ) + config.host + (config.port ? ":" + config.port: "") + config.prefix + "resources"
} );
require( ["js/qlik"], function ( qlik ) {
  qlik.setOnError( function ( error ) {
    alert( error.message );
  } );

  var app = qlik.openApp('ba1944a1-c7e9-469b-a7ce-b7db4c42a534', config);
  console.log(app);
  var element = document.getElementById("qv1");
  app.getObject(element, "PnN");


} );
