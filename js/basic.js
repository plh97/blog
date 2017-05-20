angular.module('uirouter', ['ui.router'])
.config(function($stateProvider) {
  var blogScecondState = {
    name: 'blogFirst',
    url: '/blog1',
    templateUrl: 'view/blog1.html'
  };
  var blogFirstState = {
    name: 'blogSecond',
    url: '/blog2',
    templateUrl: 'view/blog2.html'
  };
  var vcStateState = {
    name: 'vc',
    url: '/vc',
    templateUrl: 'view/vc.html'
  };
  var InterviewState = {
    name: 'Interview',
    url: '/Interview',
    templateUrl: 'view/Interview.html'
  };
  
  $stateProvider.state(blogScecondState);
  $stateProvider.state(blogFirstState);
  $stateProvider.state(vcStateState);
  $stateProvider.state(InterviewState);
});