import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import lodash from 'lodash';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyCut9x0yVw3T3u2JES1_VxJ4JAR24jC3hc';

// Create a new component This component should produce some HTML
class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			videoList: [],
			selectVideo: null
		};

		this.videoSearch('宇宙人');
	}

	videoSearch(term) {
		YTSearch({key: API_KEY, term: term}, (videos) => {
			this.setState({
				videoList: videos,
				selectVideo: videos[0]
			});
		});
	}

	render() {
		const videoSearch = lodash.debounce(term => this.videoSearch(term), 400);
		
		return (
			<div>
				<SearchBar onSearchTermChange={videoSearch} />
				<VideoDetail video={this.state.selectVideo} />
				<VideoList 
					onVideoSelect={selectVideo => this.setState({selectVideo})}// update a state, It's callback function.
					videoList={this.state.videoList} />
			</div>
		);
	}
}

// Take this comonent's generated HTML and put it on the page
ReactDOM.render(<App />, document.querySelector('.container'));
