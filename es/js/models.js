class ApiCallsModel {
    constructor(){
      this.callToNewsServer = new CallToNewsServerFactory();
    }

    getNews(channel = "ars-technica") {	
      const URL = 'https://newsapi.org/v1/articles?source=' + channel + '&apiKey=d6f85eed1e60462e8d156f1030124aef';
      return this.callToNewsServer.call(URL,'GET');
    }
  
    getSources() {
      return this.callToNewsServer.call('https://newsapi.org/v1/sources','GET');
    }
}
  