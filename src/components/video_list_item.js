import React from 'react';

const VideoListItem = ({videoEach, onVideoSelect}) => {
	// '{video}' is equal to 'const video = props.video';

	const imgUrl = videoEach.snippet.thumbnails.default.url;
	
	return (
		<li onClick={() => onVideoSelect(videoEach)} className='list-group-item'>
			<div className='video-list media'>
				<div className='media-left'>
					<img className='media-object' src={imgUrl} />
				</div>

				<div className='media-body'>
					<div className='media-header'>{videoEach.snippet.title}</div>
				</div>
			</div>
		</li>
	);
}

export default VideoListItem;