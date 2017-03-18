import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
	const videoItems = props.videoList.map(videoEach => {
		return (
			<VideoListItem
				onVideoSelect={props.onVideoSelect}
				key={videoEach.etag} 
				videoEach={videoEach} 
			/>
		)
	});

	return (
		<ul className="col-md-4 list-gruop">
			{videoItems}
		</ul>
	);
};

export default VideoList;