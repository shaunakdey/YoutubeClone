import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
    const imageURL = video.snippet.thumbnails.default.url;
    return (
        <li className="list-group-item video-list-item" onClick={() => {onVideoSelect(video)}}>
            <div className="video-list-media row justify-content-center">
                <div className="media-left col-5">
                    <img className="media-object" src={ imageURL }/>
                </div>
                <div className="media-body col-7">
                    <div className="media-heading">{video.snippet.title}</div>
                </div>
            </div>
        </li>
    );
}

export default VideoListItem;