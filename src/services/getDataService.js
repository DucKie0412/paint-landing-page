// request/imageRequest.js
import { fetchData } from '../utils/request';

export const get = async () => {
    const url = 'http://localhost:8000/api/paints';
    return await fetchData(url);
};
