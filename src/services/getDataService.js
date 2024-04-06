import { fetchData } from '../utils/request';

export const get = async ({ type } = {}) => {
    let url = `http://localhost:8000/api/paints`;
    if (type) {
        url += `?type=${encodeURIComponent(type)}`;
    }
    return await fetchData(url);
};
