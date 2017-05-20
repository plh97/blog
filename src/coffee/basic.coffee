angular.module('uirouter', ['ui.router'])
.config ($stateProvider) -> 
	blogFirstState = 
		name: 'blog1',
		url: '/blog1',
		templateUrl: 'view/blog1.html'

	blogSecondState = 
		name: 'blog2',
		url: '/blog2',
		templateUrl: 'view/blog2.html'

	homeState = 
		name: 'home',
		url: '',
		templateUrl: 'view/blog2.html'

	cvStateState = 
		name: 'cv',
		url: '/cv',
		templateUrl: 'view/cv.html'

	InterviewState = 
		name: 'Interview',
		url: '/Interview',
		templateUrl: 'view/2048.html'
	$stateProvider.state(blogFirstState)
	.state(blogSecondState)
	.state(homeState)
	.state(cvStateState)
	.state(InterviewState);