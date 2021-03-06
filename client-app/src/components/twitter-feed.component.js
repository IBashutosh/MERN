import React, { useEffect } from "react";

const TwitterFeed = () => {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://platform.twitter.com/widgets.js";
        document.getElementsByClassName("twitter-embed")[0].appendChild(script);
    }, []);
    return (
        <section className="twitterContainer">
            <div className="twitter-embed">
                <a
                    className="twitter-timeline"
                    data-theme="dark"
                    data-tweet-limit="5"
                    data-chrome="noheader nofooter noborders"
                    href="https://twitter.com/Ashutos69206561?ref_src=twsrc%5Etfw"
                >
                    Tweets by Ashutos69206561
        </a>
            </div>
        </section>
    );
};

export default TwitterFeed;