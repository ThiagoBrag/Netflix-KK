const API_KEY = '50fc67e44c2d72dd1c5af33c1287adf6';
const API_BASE = 'https://api.themoviedb.org/3';

export default {
    getHomeList: async() => {
        return [
            {
                slug:'originals',
                title: 'Originais da Netflix',
                items: []
            },
            {
                slug:'trending',
                title: 'Recomendados para você',
                items: []
            },
            {
                slug:'trending',
                title: 'Recomendados para você',
                items: []
            },
            {
                slug:'trending',
                title: 'Recomendados para você',
                items: []
            },
            {
                slug:'trending',
                title: 'Recomendados para você',
                items: []
            },
        ]
    }
}