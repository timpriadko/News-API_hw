// Create instance
const newsService = new NewsService(new CustomHttp());
const newsUI = new NewsUI();

// UI elements
const searchForm = document.querySelector('form');
const searchField = document.getElementById('search');

/**
 * @description Отправляет запрос по параметру поиска, если он передан, на сервер и выводит ответ на страницу
 * @property {DOM} search_param - параметр поиска, передаваемый пользователем
 */
const getSearchHandler = () => {
    let search_param = searchField.value;

    newsService.fetchSearch((res) => {
        const { articles, totalResults } = res;
        newsUI.clearContainer();
        if (totalResults !== 0) {
            articles.forEach(news => newsUI.addNews(news));
        } else if (totalResults === 0) {
            newsUI.noResults();
        }
    }, search_param);
};


searchForm.addEventListener('submit', (e) => {
    e.preventDefault();

    if (searchField.value) {
        getSearchHandler();
    }
});