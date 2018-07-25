import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YoutubeSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyBUNSyS3aiKbmB2RiUNOoR3frUMQaVh8vY';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            videos : [],
            selectedVideo : null
        };
        YoutubeSearch({key: API_KEY, term: 'dota'}, (videos) => {
            this.setState({ 
                videos : videos,
                selectedVideo : videos[0]
             });
        });
    }

    render() {
        return (
            <div className="width100">
                <SearchBar/>
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList videos={this.state.videos}/>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.querySelector('.container-fluid'));