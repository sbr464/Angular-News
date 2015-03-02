
var newsApp = angular.module('newsApp', ['ngResource']);


newsApp.factory('News', function($resource){
  return $resource(
    //Define and return a resource connection
    '/api/news/:id',
    {id: '@_id'}
  );
});


//List Controller
newsApp.controller('listController', function($scope, News){
  //Stick the data directly into the $scope
  $scope.news = News.query();
});

newsApp.controller('newItemController', function($scope, News){
  $scope.item = {};
  $scope.addItem = function(){
    var newItem = new News($scope.item);
    newItem.$save();
  }
});