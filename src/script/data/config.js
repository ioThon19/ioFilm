const baseUrl = "https://api.themoviedb.org/3/";
const apiKey = "?api_key=1e3c0e5c74d1311bcc085a6b7b91fa14";

const conf = {
    
    search : `${baseUrl}search/movie${apiKey}&query=`,
    nowPlaying : `${baseUrl}movie/popular${apiKey}`,
    trending : `${baseUrl}trending/movie/week${apiKey}`,
    popular : `${baseUrl}movie/popular${apiKey}`,
    topRated : `${baseUrl}movie/top_rated${apiKey}`,
    upcoming : `${baseUrl}movie/upcoming${apiKey}`,
    
}

export default conf;