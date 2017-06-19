var app = angular.module('customPage');
app.controller('homeController',function(textService){
  var home = this;
  home.test = 'Amazing Coffee!';
});
