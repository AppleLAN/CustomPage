var app = angular.module('customPage');

app.directive('textDirective', function(textService){
  return {
    scope: {
    },
    restrict: "E",
    templateUrl: 'js/templates/textDirective.html',
    controller : function ($scope,$timeout){
      
      $timeout(function () {
        jQuery('.post').addClass("hidden-div").viewportChecker({
          classToAdd: 'visible-div animated fadeIn'
        });
      });
      
      var td = this;
      td.textList = {};
      var promise = textService.getText();
      promise.then(function(data) {
          td.textList = data.data;
      });
      
      $scope.td = td;
    }
  }
});
