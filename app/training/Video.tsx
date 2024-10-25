import React from 'react';

interface YouTubeEmbedProps {
    videoId: string;
}

const Video: React.FC<YouTubeEmbedProps> = ({ videoId }) => {
    return (
        <div className="flex justify-center w-full max-w-4xl mx-auto">
            <div className="relative pb-[56.25%] w-full"> {/* 16:9 aspect ratio */}
                <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${videoId}`}
                    title="YouTube Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );
};

export default Video;
