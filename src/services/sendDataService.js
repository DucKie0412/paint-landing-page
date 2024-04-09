import axios from 'axios';

export const sendData = async (data) => {
    let url = `http://localhost:8000/api/contact`;
    try {
        const response = await axios.post(url, data);
        return response.data;
    } catch (error) {
        console.error('Failed to send data', error);
        throw error;
    }
};