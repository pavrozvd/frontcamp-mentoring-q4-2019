class ApiCallsModel {
    async getNews(channel = "ars-technica") {	
      const URL = 'https://newsapi.org/v1/articles?source=' + channel + '&apiKey=d6f85eed1e60462e8d156f1030124aef';
      const fetchResult = fetch(URL)
      const response = await fetchResult;
      return await response.json();
    }
  
    async getSources() {
      const URL = 'https://newsapi.org/v1/sources';
      const fetchResult = fetch(URL)
      const response = await fetchResult;
      return await response.json();
    }
}
  