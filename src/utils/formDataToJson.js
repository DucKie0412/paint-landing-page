import axios from 'axios';

export async function sendData(url, data) {
    try {
        const response = await axios.post(url, data);
        return response.data;
    } catch (error) {
        console.error('Failed to send data', error);
        throw error;
    }
}