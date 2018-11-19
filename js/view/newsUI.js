/** NewsUI - класс, который содержит UI-элементы странициы */
class NewsUI {
    /**
     * @param {DOM} _container - контейнер, в который будут помещаться ответы от сервера
     * @param {string} _defaultImage - картинка, отображаемая в статье в случае отсутсвия картинки у статьи, которая пришла от сервера
     */
    constructor() {
        this._container = document.querySelector(".news-container .row");
        this._defaultImage = "img/default-image.png";
    }


    /**
     * @description Добавляет шаблон новости на страницу
     * @param {object} news - обьект, полученый от сервера
     * @const template - шаблон, в который будет записан ответ "news" от сервера
     */
    addNews(news) {
        const template = this._newsTemplate(news);
        this._container.insertAdjacentHTML("afterbegin", template);
    }

    /** @description Удаляет UI-элементы из контайнера с ответами от сервера*/
    clearContainer() {
        this._container.innerHTML = "";
    }

    /**
     * @description Шаблон новости
     * @param {string} urlToImage - значение "urlToImage" обьекта, полученного в ответе от сервера
     * @param {string} url - значение "url" обьекта, полученного в ответе от сервера
     * @param {string} title - значение "title" обьекта, полученного в ответе от сервера
     * @param {string} description - значение "description" обьекта, полученного в ответе от сервера
     */
    _newsTemplate({ urlToImage, url, title, description }) {
        return `
        <div class="col s12 l6"> 
            <div class="card">
                <div class="card-image">
                    <img src="${urlToImage || this._defaultImage}">
                </div>
                <div class="card-content">
                    <span class="card-title">${title}</span>
                    <p>${description || ""}</p>
                </div>
                <div class="card-action">
                    <a href="${url}" target="_blank">Read more</a>
                </div>
            </div>
        </div>
        `;
    }

    /** @description Выводит сообщение о том, что результаты поиска отсутствуют*/
    noResults() {
        const template = this._noResultsTemplate();
        this._container.insertAdjacentHTML("afterbegin", template);
    }

    /** @description Шаблон сообщения о том, что результаты поиска отсутствуют */
    _noResultsTemplate() {
        return `
        <div class="col s12">
            <h4 class="center-align">No results found</h4>
        </div>
        `
    }
}