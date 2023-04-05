import axios from 'axios';

const API_KEY = '33720789-659b4f752392dce80e9c25fae';
axios.defaults.baseURL = 'https://pixabay.com/api/';

export function fetchImages(search, page) {
    return axios('', {
        params: {
            key: API_KEY,
            page: page,
            image_type: 'photo',
            orientation: 'horizontal',
            per_page: 12,
            q: search,
        },
    });
}