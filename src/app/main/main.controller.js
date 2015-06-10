'use strict';

angular.module('textamp2')
  .controller('MainCtrl', function ($scope) {
    $scope.max_volumes = Array.apply(null, {length: 100}).map(Number.call, Number);
    $scope.volume = 10;
    $scope.max_linefeeds = Array.apply(null, {length: 3}).map(Number.call, Number);
    $scope.linefeed = 0;
    $scope.increment_sign = '#';
    $scope.increment_start = 0;
    $scope.updateText = function () {
      var texts = []
      for (var i = 0; i < $scope.volume; i++) {
        var text = $scope.text
        if ($scope.increment) {
          var increment_start = Number($scope.increment_start);
          var number = i + increment_start;
          text = text.replace($scope.increment_sign, number);
        }
        texts.push(text);
      }
      var joinChar = '';
      for (var i = 0; i < $scope.linefeed; i++) {
        joinChar += '\n';
      }
      $scope.amplifiedText = texts.join(joinChar);
    };
  });
