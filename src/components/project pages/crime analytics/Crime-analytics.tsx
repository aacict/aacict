import { useEffect } from "react";

const CrimeAnalytics = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://cdn.powerbi.com/libs/powerbi-client/2.19.1/powerbi.min.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <iframe
            title="Power BI Report"
            width="100%"
            height="100%"
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                border: 'none',
                height: '100vh',
                width: '100vw',
            }}
            src="https://georgiancollege-my.sharepoint.com/:u:/g/personal/200577093_student_georgianc_on_ca/EdyigrY9iJFAvd3Co7soXYAB86KlKWhk8inmncdNu-Yf3Q?e=QedqR6"
            allowFullScreen
        />
    );
};

export default CrimeAnalytics;
