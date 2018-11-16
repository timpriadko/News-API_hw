class NewsService {
    constructor(http) {
            this._key = "12945aa522a54ae98aac008d8eaade01";
            this._url = "https://newsapi.org/v2";
            this._country = "ua";
            this._category = "technology";
            this._http = http;
            this._search_param = document.getElementById('textarea1').value;
        }
        /**
         * 
         * @param {*} callback 
         * @param {*} country 
         * @param {*} category 
         */
    fetchTopHeadlines(callback, country = this._country, category = this._category) {
        this._http.get(`${this._url}/top-headlines?country=${country}&category=${category}&apiKey=${this._key}`, callback);
    }

    /**
     * 
     */
    fetchSearch(callback, country = this._country, category = this._category) {
        if (this._search_param.length) {
            this._http.get(`${this._url}everything?q=${this._search_param}&apiKey=${this._key}`, callback);
        }
    }

}