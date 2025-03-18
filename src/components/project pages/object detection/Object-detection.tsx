import { ChangeEvent, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { objectDetection } from "../../../queries/object-detection";

interface objectDetectionRespResults {
    label: string;
    score: number;
}
interface objectDetectionResp {
    image: string;
    results: Array<objectDetectionRespResults>;
}

const ObjectDetection = () => {
    const [image, setImage] = useState<File | null>(null);
    const [detectedImage, setDetectedImage] = useState<string | null>(null);
    const [results, setResults] = useState<Array<objectDetectionRespResults>>([]);
    const [error, setError] = useState<string | null>(null);

    const { mutateAsync, isPending, error: mutationError } = useMutation({
        mutationFn: objectDetection,
        onSuccess: (data: objectDetectionResp) => {
            setDetectedImage(`data:image/jpeg;base64,${data.image}`);
            setResults(data.results);
        },
        onError: (error: unknown) => {
            console.error("Error uploading image:", error);
            setError("An error occurred during the detection.");
        },
    });

    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files ? e.target.files[0] : null;
        if (file) {
            setImage(file);
        }
    };

    const handleImageUpload = async () => {
        if (!image) return;

        try {
            await mutateAsync(image);
        } catch (err) {
            console.error("Upload error:", err);
        }
    };

    return (
        <div className="container mx-auto bg-white shadow-md rounded-lg p-6 space-y-6">
            <h1 className="text-2xl font-bold text-center text-blue-500">Object Detection</h1>
            <div className="flex">
                <label htmlFor="file-upload" className="w-[90%]">
                    <input
                        id="file-upload"
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleImageChange(e)}
                        className="hidden"
                    />
                    <div className="w-full py-3 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent cursor-pointer hover:bg-gray-100 text-center">
                        <span className="text-gray-700">Choose an image</span>
                    </div>
                </label>
                <button
                    onClick={handleImageUpload}
                    className="w-[10%] p-2 text-white rounded-md shadow-md bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    disabled={!image}
                >
                    {isPending ? 'Detecting...' : 'Detect'}
                </button>
            </div>

            <div className="w-full flex justify-center">
                {image && (
                    <span className="text-sm text-gray-600">Selected File: {image.name}</span>
                )}
            </div>

            <div>
                {error && (
                    <p className="text-center text-red-500 font-semibold">{mutationError?.message}</p>
                )}

            </div>
            {detectedImage && (<div className="text-center">
                <h2 className="text-xl font-semibold text-blue-500 mt-6">Detected Image</h2>
                <div className=" ">
                    <img
                        src={detectedImage}
                        alt="Detected result"
                        className="mx-auto mt-4 w-[70%] max-h-96 object-contain rounded-lg shadow-lg"
                    />
                    <div className="detection-list text-red-500">
                        {results.map((result, index) => (
                            <li key={index}>
                                Detected {result.label} with confidence score {result.score}.
                            </li>
                        ))}
                    </div>
                </div>
            </div>
            )}
        </div>
    );
};

export default ObjectDetection;
