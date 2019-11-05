function NewsController() {
    var apiCallsModel = new ApiCallsModel();
    var newsView = new NewsView(apiCallsModel);
    
    
    newsView.SetChanells();
    newsView.SetNews();
}