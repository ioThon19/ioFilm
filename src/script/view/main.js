import '../components/movie-list.js';
import conf from '../data/config.js';
import DataSource from '../data/data-source.js';

const main = () => {
    const searchElement = document.querySelector("header-bar");
    const NavTab = document.querySelector("nav-tab");
    const movieListElement = document.querySelector("movie-list");
    const loading = document.getElementById("loading");

    const showLoading = () => {
        movieListElement.style.display = "none";
        loading.innerHTML = "<loading-status></loading-status>";
    }

    const clearTabSelected = () => {
        NavTab.querySelectorAll(".nav .nav-item .nav-link").forEach((item) => {
            item.classList.remove("active");
        });
    }

    const getMovieList = conf => {
        showLoading();
        DataSource.getMovieList(conf)
            .then(renderResult)
            .catch(fallbackResult);
    };

    const onSearchAction = () => {
        showLoading();
        clearTabSelected();
        DataSource.searchMovie(searchElement.value)
            .then(renderResult)
            .catch(fallbackResult);
    };

    const renderResult = results => {
        loading.innerHTML = "";
        movieListElement.style.display = "flex";
        movieListElement.movies = results;
    };

    const fallbackResult = message => {
        movieListElement.renderError(message);
    };

    const onTabSelect = () => {
        searchElement.querySelector("#searchBox").value = "";
        const category = NavTab.value;
        switch (category) {
            case 'nowPlaying': getMovieList(conf.nowPlaying); break;
            case 'trending': getMovieList(conf.trending); break;
            case 'popular': getMovieList(conf.popular); break;
            case 'topRated': getMovieList(conf.topRated); break;
            case 'upcoming': getMovieList(conf.upcoming); break;
        }
    }

    NavTab.clickEvent = onTabSelect;
    searchElement.clickEvent = onSearchAction;
    getMovieList(conf.nowPlaying);
};

export default main;