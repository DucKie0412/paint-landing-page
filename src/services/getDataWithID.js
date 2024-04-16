import { fetchData } from '../utils/request';

export const getWithID = async ({ id } = {}) => {
    let url = `http://localhost:8000/api/paints/detail`;
    if (id) {
        url += `/${encodeURIComponent(id)}`;
    }
    return await fetchData(url);
};
