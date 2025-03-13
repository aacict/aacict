import axios from 'axios';

export const getUsers = async () => {
    try {
        const response = await axios.get('https://reqres.in/api/users?page=2');
        return response.data;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
};