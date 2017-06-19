var app = angular.module('customPage');

app.directive('slickDirective', function($window, $compile, textService){
  return {
    scope: {
    },
    restrict: "E",
    templateUrl: 'js/templates/slickDirective.html',
    controller : function ($scope,$timeout){
      var sd = this;
      textService.getText().then(function(response) {
        sd.text = response.data;
        $timeout(function () {
          $('.slick-coffe').slick({
            dots: true,
            centerMode: true,
            centerPadding: '60px',
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            responsive: [
            {
              breakpoint: 768,
              settings: {
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
              }
            }]
          });
        });
      });
      $scope.sd = sd;
    }
  }
});
