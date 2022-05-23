const API_KEY = '50fc67e44c2d72dd1c5af33c1287adf6';
const API_BASE = 'https://api.themoviedb.org/3';

const basicFetch = async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json;
}

export default {
    getHomeList: async() => {
        return [
            {
                slug:'originals',
                title: 'Originais da Netflix',
                items: await basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug:'trending',
                title: 'Recomendados para você',
                items: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug:'toprated',
                title: 'Em alta',
                items: await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug:'action',
                title: 'Ação',
                items: []
            },
            {
                slug:'comedy',
                title: 'Comédia',
                items: []
            },
            {
                slug:'horror',
                title: 'Terror',
                items: []
            },
            {
                slug:'romance',
                title: 'Romance',
                items: []
            },
            {
                slug:'documentary',
                title: 'Documentários',
                items: []
            },
        ]
    }
}