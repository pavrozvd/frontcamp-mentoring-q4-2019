class ApiCalls {
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

var apiCalls = new ApiCalls(); 
apiCalls.getSources().then(ret_val => {   
   for (let i = 0; i < ret_val.sources.length; i++) {	
   	var opt1 = document.createElement("option");
  	opt1.value = ret_val.sources[i].id;
 	  opt1.text =  ret_val.sources[i].name;
  	document.getElementById('channels').add(opt1,null);
   }
})


const selectElement = document.querySelector('#channels');
selectElement.addEventListener('change', (event) => {
  var apiCalls = new ApiCalls(); 

  apiCalls.getNews(event.target.value).then(ret_val => {   
    var tableRef = document.getElementById('news').getElementsByTagName('tbody')[0];
    for(var i = tableRef.rows.length - 1; i > 0; i--)
    {
        tableRef.deleteRow(i);
    }

    for (let i = 0; i < ret_val.articles.length; i++) {	
      var newRow   = tableRef.insertRow(tableRef.rows.length);
      var title = ret_val.articles[i].title;
      var description = ret_val.articles[i].description;
      obj = { title, description };

      newRow.innerHTML = `<tr><td>${obj.title}</td><td>${obj.description}</td><tr>`;
    }
  })  
});

