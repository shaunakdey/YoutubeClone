import React from 'react';

const VideoArea = ({video}) => {
    if(!video) {
        return (
            <div className="col-lg-7 col-sm-12">
                <div className="embed-responsive embed-responsive-16by9">
                    <iframe className="embed-responsive-item video-embed-loading"></iframe>
                </div>
                <div className="details">
                    <div className="video-title-loading"></div>
                    <div className="video-description-loading"></div>
                </div>
            </div>
        );
    }
    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;
    return (
        <div className="col-lg-7 col-sm-12 video-area">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={url}></iframe>
            </div>
            <div className="video-details">
                <div className="video-details-title">{video.snippet.title}</div>
                <div className="video-details-description">{video.snippet.description}</div>
            </div>
        </div>
    );
};

export default VideoArea;