/** * CustomHttp - класс, обрабатывающий AJAX-запрос */
class CustomHttp {

    /** @description - метод для получения ответа на AJAX-запрос
     * @param {string} url - URL, на который передаётся AJAX-запрос
     * @param {function} callback  - обработчик AJAX-запроса
     */
    get(url, callback) {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", url);

        xhr.addEventListener("load", () => {
            callback(JSON.parse(xhr.responseText));
        });

        xhr.send();
    }
}