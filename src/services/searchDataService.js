import { fetchData } from '../utils/request';

export const search = async ({ searchKey } = {}) => {
    let url = `http://localhost:8000/api/paints/search`;
    if (searchKey) {
        url += `?s=${encodeURIComponent(searchKey)}`;
    }
    return await fetchData(url);
};
