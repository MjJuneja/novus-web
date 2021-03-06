'use strict';

/**
 * @ngdoc service
 * @name novusApp.addcase
 * @description
 * # addcase
 * Factory in the novusApp.
 */
angular.module('novusApp')
  .factory('addcase', function ($http,$q,phpurl) {

    var object={
      loadHCoptions:function(obj){
        var defer = $q.defer(); 
        $http.post(phpurl+ "/php/high_menu.php",obj)
        .then(function(data){
          defer.resolve(data); 
        },function(error){
          defer.reject(error);
        })
        return defer.promise;
      },

      loadDCoptions1:function(obj){
        var defer = $q.defer(); 
        $http.post(phpurl+ "/php/dist_menu.php",obj)
        .then(function(data){
          defer.resolve(data); 
        },function(error){
          defer.reject(error);
        })
        return defer.promise;
      },

      loadDCoptions2:function(obj){
        var defer = $q.defer(); 
        $http.post(phpurl+ "/php/dist_menu.php",obj)
        .then(function(data){
          defer.resolve(data); 
        },function(error){
          defer.reject(error);
        })
        return defer.promise;
      },

      sendSupremeData:function(obj){
        var defer = $q.defer(); 
        $http.post(phpurl+ "/php/add_sup.php",obj)
        .then(function(data){
          defer.resolve(data); 
        },function(error){
          defer.reject(error);
        })
        return defer.promise;
      },

      sendDistrictData:function(obj){
        var defer = $q.defer(); 
        $http.post(phpurl+ "/php/add_dist.php",obj)
        .then(function(data){
          defer.resolve(data); 
        },function(error){
          defer.reject(error);
        })
        return defer.promise;
      },

      sendHighData:function(obj){
        var defer = $q.defer(); 
        $http.post(phpurl+ "/php/add_high.php",obj)
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
