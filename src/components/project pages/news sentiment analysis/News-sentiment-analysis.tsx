import { useMutation, useQuery } from "@tanstack/react-query";
import { getNews, getNewsSentiment } from "../../../queries/News-sentiment-analysis";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

interface newsDataWithSentiment {
    title: string;
    desc: string;
    label: string;
    positive: number;
    negative: number;
    neutral: number;
}

const NewsSentimentAnalysis = () => {
    const [searchParam, setSearchParam] = useState('ronaldo');
    const [tempSearchParam, setTempSearchParam] = useState('ronaldo');
    const [news, setNews] = useState<newsDataWithSentiment[]>([]);
    const getNewsSentimentMutation = useMutation({ mutationFn: getNewsSentiment });

    const newsQuery = useQuery({ queryKey: ['news', searchParam], queryFn: () => getNews(searchParam), enabled: !!searchParam });

    useEffect(() => {
        if (newsQuery.isSuccess) {
            console.log("Triggering sentiment mutation");
            getNewsSentimentMutation.mutate(newsQuery.data.data);
        }
    }, [newsQuery.isSuccess, newsQuery.data]);

    useEffect(() => {
        if (getNewsSentimentMutation.isSuccess) {
            console.log("Setting news data with sentiment");
            setNews(getNewsSentimentMutation.data.data);
        }
    }, [getNewsSentimentMutation.isSuccess, getNewsSentimentMutation.data]);


    const handleSearch = () => {
        setSearchParam(tempSearchParam);
        setNews([]);
    }

    return (
        <>
            < div className="container" >
                <div className="flex text-2xl font-bold justify-center items-center">News Sentiment Analysis</div>
                <div className="flex ">
                    <input type="text" name="query" value={tempSearchParam} onChange={(e) => setTempSearchParam(e.target.value)} className="border border-gray-200 p-4 my-4 w-full" placeholder="Search news" />
                    <button className="bg-blue-500 text-white p-5 m-5" onClick={handleSearch}>Search</button>
                </div>

                {newsQuery.isLoading || getNewsSentimentMutation.isPending ?
                    <div className="flex justify-center items-center">
                        <FontAwesomeIcon icon={faSpinner} spin size="3x" color="blue" />
                        <span>Please wait!!!!!, its analyzing the sentiment.</span>
                    </div>
                    : null}
                {
                    news.map((data, index) => (
                        <div key={index} className="border border-gray-200 p-4 my-4">
                            <h2 className="text-xl font-bold">{data.title}</h2>
                            <p className="text-gray-600">{data.desc}</p>
                            <p className="text-gray-600">Sentiment: {data.label}</p>
                            <p className="text-gray-600">Positive: {data.positive}</p>
                            <p className="text-gray-600">Negative: {data.negative}</p>
                            <p className="text-gray-600">Neutral: {data.neutral}</p>
                        </div>
                    ))
                }
            </div >
        </>
    );
};

export default NewsSentimentAnalysis;