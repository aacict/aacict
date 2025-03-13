import axios from 'axios';
const BASEURL = import.meta.env.VITE_NEWS_SENTIMENT_ANALYSIS_API_URL;
interface News {
    title: string;
    desc: string;
}

export const getNews = async (query = 'ronaldo') => {
    try {
        const response = await axios.get(`${BASEURL}/get-news`, { params: { query } });
        // return { "status": "success", "data": news }
        return response.data;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
};

export const getNewsSentiment = async (news: News) => {
    try {
        const response = await axios.post(`${BASEURL}/get-news-sentiment`, { news });
        // return { "status": "success", "data": news }
        return response.data;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
};