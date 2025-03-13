import axios from 'axios';
const BASEURL = import.meta.env.VITE_NEWS_SENTIMENT_ANALYSIS_API_URL;
const news = [
    {
        "desc": "Teutopolis Junior High School announced its third quarter honor roll.",
        "title": "Teutopolis Junior High School Honor Roll"
    },
    {
        "desc": "FROSTBURG, Md. (WV News) - Even as Allegany County Library executive director John Taube continues to plan to present the county commissioners with a proposed budget requesting an additional $159,000 for Fiscal Year 2026, the Library Board of Trustees continues...",
        "title": "Library board continues to struggle with proposed cuts"
    },
    {
        "desc": "TILDEN — A celebration of life for Fay M. Johnson, 66, of Oakdale will be held later this summer. Brockhaus-Harlan Funeral Home in Tilden is in charge of arrangements.",
        "title": "Fay Johnson"
    },
    {
        "desc": "When you think about the soft life, words like entitled and privileged may come to mind. But contrary to what you may think, the soft life doesn’t always have to mean flying first class and drinking expensive champagne (although, we wouldn’t turn it down if you offered). It’s more about doing what you can to give...Read more...",
        "title": "13 Black Woman Influencers Who Teach Us How to Live the Soft Life"
    },
    {
        "desc": "Pokémon Go's team leader says the entire team is moving with the game, and that it will continue to evolve at Scopely.",
        "title": "Pokémon Go, Monster Hunter Now and Pikmin Bloom Sold to Monopoly Go! Owner Scopely"
    },
    {
        "desc": "He previously worked for the NYS Department of Transportation.",
        "title": "Company news: Anthony Amodei joins Prudent Engineering"
    },
    {
        "desc": "(MENAFN - GlobeNewsWire - Nasdaq) SHANGHAI, March 12, 2025 (GLOBE NEWSWIRE) -- Jiangxi Copper Company Limited (– JCC –) announced today that its wholly-owned subsidiary Jiangxi Copper (Hong Kong) ...",
        "title": "Jiangxi Copper Files Early Warning Report"
    },
    {
        "desc": "(MENAFN - GlobeNewsWire - Nasdaq) DAILY FLIGHTS STRENGTHENING CONNECTIONS WITH JAMAICA AND THE DIASPORAPiarco, March 12, 2025 (GLOBE NEWSWIRE) -- Caribbean Airlines proudly reintroduces its non-stop ...",
        "title": "CARIBBEAN AIRLINES RESTARTS MONTEGO BAY–FORT LAUDERDALE"
    },
    {
        "desc": "No one was injured, and the fire damaged one apartment in the 11-story building.",
        "title": "Fire on 5th-floor balcony extinguished after it was spotted by Ypsilanti police"
    },
    {
        "desc": "(MENAFN - GlobeNewsWire - Nasdaq) LEXINGTON, Mass., March 12, 2025 (GLOBE NEWSWIRE) -- Rapid Micro Biosystems, Inc. (Nasdaq: RPID) (the–Company–), an innovative life sciences technology company ...",
        "title": "Rapid Micro Biosystems Announces Inducement Grants Under Nasdaq Listing Rule 5635(C)(4)"
    }
]

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

export const getNewsSentiment = async (news) => {
    try {
        const response = await axios.post(`${BASEURL}/get-news-sentiment`, { news });
        // return { "status": "success", "data": news }
        return response.data;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
};