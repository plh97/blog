angular.module('uirouter', ['ui.router']).config(function($stateProvider) {
  var InterviewState, blogFirstState, blogSecondState, cvStateState;
  blogFirstState = {
    name: 'blog1',
    url: '/blog1',
    templateUrl: 'view/blog1.html'
  };
  blogSecondState = {
    name: 'blog2',
    url: '',
    templateUrl: 'view/blog2.html'
  };
  cvStateState = {
    name: 'cv',
    url: '/cv',
    templateUrl: 'view/cv.html'
  };
  InterviewState = {
    name: 'Interview',
    url: '/Interview',
    templateUrl: 'view/2048.html'
  };
  return $stateProvider.state(blogFirstState).state(blogSecondState).state(cvStateState).state(InterviewState);
});