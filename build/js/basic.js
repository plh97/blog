(function() {
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

}).call(this);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzaWMuanMiLCJzb3VyY2VzIjpbImJhc2ljLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFBLE9BQU8sQ0FBQyxNQUFSLENBQWUsVUFBZixFQUEyQixDQUFDLFdBQUQsQ0FBM0IsQ0FDQSxDQUFDLE1BREQsQ0FDUSxTQUFDLGNBQUQ7QUFDUCxRQUFBO0lBQUEsY0FBQSxHQUNDO01BQUEsSUFBQSxFQUFNLE9BQU47TUFDQSxHQUFBLEVBQUssUUFETDtNQUVBLFdBQUEsRUFBYSxpQkFGYjs7SUFJRCxlQUFBLEdBQ0M7TUFBQSxJQUFBLEVBQU0sT0FBTjtNQUNBLEdBQUEsRUFBSyxFQURMO01BRUEsV0FBQSxFQUFhLGlCQUZiOztJQUlELFlBQUEsR0FDQztNQUFBLElBQUEsRUFBTSxJQUFOO01BQ0EsR0FBQSxFQUFLLEtBREw7TUFFQSxXQUFBLEVBQWEsY0FGYjs7SUFJRCxjQUFBLEdBQ0M7TUFBQSxJQUFBLEVBQU0sV0FBTjtNQUNBLEdBQUEsRUFBSyxZQURMO01BRUEsV0FBQSxFQUFhLGdCQUZiOztXQUdELGNBQWMsQ0FBQyxLQUFmLENBQXFCLGNBQXJCLENBQ0EsQ0FBQyxLQURELENBQ08sZUFEUCxDQUVBLENBQUMsS0FGRCxDQUVPLFlBRlAsQ0FHQSxDQUFDLEtBSEQsQ0FHTyxjQUhQO0VBcEJPLENBRFI7QUFBQSIsInNvdXJjZXNDb250ZW50IjpbImFuZ3VsYXIubW9kdWxlKCd1aXJvdXRlcicsIFsndWkucm91dGVyJ10pXHJcbi5jb25maWcgKCRzdGF0ZVByb3ZpZGVyKSAtPiBcclxuXHRibG9nRmlyc3RTdGF0ZSA9IFxyXG5cdFx0bmFtZTogJ2Jsb2cxJyxcclxuXHRcdHVybDogJy9ibG9nMScsXHJcblx0XHR0ZW1wbGF0ZVVybDogJ3ZpZXcvYmxvZzEuaHRtbCdcclxuXHJcblx0YmxvZ1NlY29uZFN0YXRlID0gXHJcblx0XHRuYW1lOiAnYmxvZzInLFxyXG5cdFx0dXJsOiAnJyxcclxuXHRcdHRlbXBsYXRlVXJsOiAndmlldy9ibG9nMi5odG1sJ1xyXG5cclxuXHRjdlN0YXRlU3RhdGUgPSBcclxuXHRcdG5hbWU6ICdjdicsXHJcblx0XHR1cmw6ICcvY3YnLFxyXG5cdFx0dGVtcGxhdGVVcmw6ICd2aWV3L2N2Lmh0bWwnXHJcblxyXG5cdEludGVydmlld1N0YXRlID0gXHJcblx0XHRuYW1lOiAnSW50ZXJ2aWV3JyxcclxuXHRcdHVybDogJy9JbnRlcnZpZXcnLFxyXG5cdFx0dGVtcGxhdGVVcmw6ICd2aWV3LzIwNDguaHRtbCdcclxuXHQkc3RhdGVQcm92aWRlci5zdGF0ZShibG9nRmlyc3RTdGF0ZSlcclxuXHQuc3RhdGUoYmxvZ1NlY29uZFN0YXRlKVxyXG5cdC5zdGF0ZShjdlN0YXRlU3RhdGUpXHJcblx0LnN0YXRlKEludGVydmlld1N0YXRlKTsiXX0=
