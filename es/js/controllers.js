import { NewsView } from './views.js';
import { ApiCallsModel } from './models.js';

export function NewsController() {
    var apiCallsModel = new ApiCallsModel();
    var newsView = new NewsView(apiCallsModel);
    
    newsView.SetChanells();
    newsView.SetNews();
};

