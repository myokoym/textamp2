'use strict';

angular.module('textamp2')
  .controller('MainCtrl', function ($scope) {
    $scope.max_volumes = Array.apply(null, {length: 100}).map(Number.call, Number);
    $scope.volume = 10;
    $scope.updateText = function () {
      var texts = []
      for (var i = 0; i < $scope.volume; i++) {
        texts.push($scope.text);
      }
      $scope.amplifiedText = texts.join('\n');
    };
  });
