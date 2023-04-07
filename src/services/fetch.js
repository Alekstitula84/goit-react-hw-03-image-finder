
import axios from 'axios';

const KEY = '33720789-659b4f752392dce80e9c25fae';

const fetchApi = async (query, page) => {
    const apiConfig = `https://pixabay.com/api/?q=${query}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`;
    const response = await axios.get(apiConfig);
    return response.data;
};

export default fetchApi;