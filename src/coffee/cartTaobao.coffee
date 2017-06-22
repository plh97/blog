angular.module('uirouter', ['ui.router'])
.config ($stateProvider) -> 
	blogFirstState = 
		name: 'blog1',
		url: '/blog1',
		templateUrl: '/blog1.html'

	blogSecondState = 
		name: 'blog2',
		url: '/blog2',
		templateUrl: '/blog2.html'

	homeState = 
		name: 'home',
		url: '',
		templateUrl: '/blog2.html'

	cvStateState = 
		name: 'cv',
		url: '/cv',
		templateUrl: '/cv.html'

	$stateProvider.state(blogFirstState)
	.state(blogSecondState)
	.state(homeState)
	.state(cvStateState);