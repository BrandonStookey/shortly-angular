angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, ShortenLinks) {
  // Your code here
  console.log('I am a SHORTEN controller function!');
  angular.extend($scope, ShortenLinks);
})

.factory('ShortenLinks', function($http){
  var link = {};
  var addLink = function(){
    return $http({
      method: 'POST',
      url: '/api/links'
    })
    .then(function(resp, status){
      console.log('RESP:', resp.data);
      console.log('STATUS:', status);
      // cannot access statusCode
    });
  };
  return {
    link: link,
    addLink: addLink
  };
});