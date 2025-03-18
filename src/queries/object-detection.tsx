import axios from 'axios';
const BASEURL = import.meta.env.VITE_NEWS_SENTIMENT_ANALYSIS_API_URL;

export const objectDetection = async (image: File) => {
    try {
        const formData = new FormData();
        formData.append("image", image);
        const response = await axios.post(`${BASEURL}/object-detection/detect`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
            // responseType: "blob",
        });

        // const imageURL = URL.createObjectURL(response.data);
        console.log(response.data)
        return response.data;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
};