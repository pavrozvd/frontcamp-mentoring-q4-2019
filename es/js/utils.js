const error = {
    errorMessage: '',
    getInstance() { return this }
};

class CallToNewsServerFactory{
    async call(url,method) {
        switch(method){
            case "GET": {
                logger(url, "GET");
                const fetchResult = fetch(url)
                const response = await fetchResult;
                return await response.json(); 
            } 
            case "POST": {
                logger('url', "POST");
                throw 'Not implemented';
            }
        }    
    }
}

function logger(url, method){
    let target = {};
    let proxy = new Proxy(target, {}); 
    
    proxy.url = url;
    proxy.method = method;
    console.log(`Url: ${proxy.url}, method: ${proxy.method}`); 
}