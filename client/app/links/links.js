angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // Your code here

  angular.extend($scope, Links);
  $scope.getLinks();
})

.factory('Links', function($http){
  var data = { };
  var getLinks = function(){
    return $http({
      method: 'GET',
      url:'/api/links'
    })
    .then(function(resp) {
      data.links = resp.data;
      // return resp.data;
    });
  };  
  
  return {
    data: data,
    getLinks: getLinks
  };
});




//We need to build  link.js && .html
//we ned to build out shortn.js && .html
  //Follow specs to build out both files
//Create hyperlink ahref=# on index.html
  

  //links.html
  //shorten.html

//Build out links service
//add routing 
 
  