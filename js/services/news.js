/**NewsService - класс, который передаёт запрос на сервер */
class NewsService {
    /**
     * @param {class} http - значение, принимаемое классом "NewsService", в которое будет передаваться класс "CustomHttp"
     * @param {string} _key - API-ключ
     * @param {string} _url - постоянная часть URL-адресса отправляемого на сервер
     */
    constructor(http) {
        this._key = "12945aa522a54ae98aac008d8eaade01";
        this._url = "https://newsapi.org/v2";
        this._http = http;
    }

    /**
     * @description Метод, который отправляет запрос на сервер
     * @param {function} callback - обработчик URL-адресса
     * @param {string} search_param - параметр поиска, который передаёт пользователь
     */
    fetchSearch(callback, search_param) {
        this._http.get(`${this._url}/everything?q="+${search_param}"&apiKey=${this._key}`, callback);
    }

}