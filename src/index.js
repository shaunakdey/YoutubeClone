import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YoutubeSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoArea from './components/video_area';

const API_KEY = 'AIzaSyBUNSyS3aiKbmB2RiUNOoR3frUMQaVh8vY';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            term : '',
            videos : [],
            selectedVideo : null
        };
    }

    videoSearch(term) {
        YoutubeSearch({key: API_KEY, term: term}, (videos) => {
            this.setState({ 
                videos : videos,
                selectedVideo : videos[0],
                term : term
             });
        });
    }

    render() {
        if(this.state.term == '') {
            return (
                <div className="container-fluid app">
                    <div className="container-fluid row justify-content-center align-items-center searchbar-banner">
                        <SearchBar onSearchTermChange={term => this.videoSearch(term)}/>
                    </div>
                    <div className="container-fluid">
                        <div className="row justify-content-center align-items-center default-video-area">
                            My<span className="tube">Tube</span>
                        </div>
                    </div>
                </div>
            );
        }
        const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 1000);
        return (
            <div className="container-fluid app">
                <div className="container-fluid row justify-content-center align-items-center searchbar-banner">
                    <SearchBar onSearchTermChange={videoSearch}/>
                </div>
                <div className="container content-area">
                    <div className="row justify-content-around">
                        <VideoArea video={this.state.selectedVideo}/>
                        <VideoList onVideoSelect={ selectedVideo => this.setState({selectedVideo}) } videos={this.state.videos}/>
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));