import conf from './config';
class DataSource {

    static getMovieList(conf) {
        return fetch(conf)
            .then(response => {
                return response.json()
            })
            .then(responseJson => {
                if (responseJson.results) {
                    return Promise.resolve(responseJson.results);
                }
            })
    }

    static searchMovie(title) {
        return fetch(`${conf.search}${title}`)
            .then(response => {
                return response.json()
            })
            .then(responseJson => {
                if (responseJson.results) {
                    return Promise.resolve(responseJson.results);
                } else {
                    return Promise.reject(`${title} is not found.`)
                }
            })
    }
}

export default DataSource