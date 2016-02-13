angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  console.log('I am a SHORTEN controller function!');
  angular.extend($scope, Links);
});

