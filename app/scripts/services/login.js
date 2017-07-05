'use strict';

/**
 * @ngdoc service
 * @name novusApp.login
 * @description
 * # login
 * Factory in the novusApp.
 */
angular.module('novusApp')
  .factory('login', function ($http,$q,requrl) {

    var object = {

        loginUser:function(loginObject){
          var defer = $q.defer(); 
          $http.post(requrl+"/php/signup/login.php",loginObject)
          .then(function(data){
               defer.resolve(data);
           },function(error){
               defer.reject(error);
           }) 
            return defer.promise;
        },

    };
    return object;

});
