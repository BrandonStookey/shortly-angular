angular.module('shortly.services', [])
//We are having trouble with our POST method 
//We need to fix this!
//We still need to validate ShortenLink form like we did for signin and signup
.factory('Links', function ($http) {
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
  
  var link = {};
  var addLink = function(urlInput){
    return $http({
      method: 'POST',
      url: '/api/links',
      data: {
        url: urlInput
      }
    })
    .success(function(resp, status){
      console.log('RESP:', resp);
      console.log('RESPDATA:', resp.data);
      console.log('STATUS:', status);
      // cannot access statusCode
    });
  };
  return {
    link: link,
    addLink: addLink,
    data: data,
    getLinks: getLinks
  };
})
  // Your code here
  //we need to fetch link
  
  //we need to validate link
  //we need to check if we already have it
  //we need to shorten link
  //we need to pass link to LINK page
  //

  //should we put shorten.js and links.js all in this file?
  //
.factory('Auth', function ($http, $location, $window) {
  // Don't touch this Auth service!!!
  // it is responsible for authenticating our user
  // by exchanging the user's username and password
  // for a JWT from the server
  // that JWT is then stored in localStorage as 'com.shortly'
  // after you signin/signup open devtools, click resources,
  // then localStorage and you'll see your token from the server
  var signin = function (user) {
    return $http({
      method: 'POST',
      url: '/api/users/signin',
      data: user
    })
    .then(function (resp) {
      return resp.data.token;
    });
  };

  var signup = function (user) {
    return $http({
      method: 'POST',
      url: '/api/users/signup',
      data: user
    })
    .then(function (resp) {
      return resp.data.token;
    });
  };

  var isAuth = function () {
    return !!$window.localStorage.getItem('com.shortly');
  };

  var signout = function () {
    $window.localStorage.removeItem('com.shortly');
    $location.path('/signin');
  };


  return {
    signin: signin,
    signup: signup,
    isAuth: isAuth,
    signout: signout
  };
});
