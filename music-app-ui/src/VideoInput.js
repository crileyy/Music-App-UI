import React from 'react';

const VideoInput = (props) => {
	return (
		<div>
			<input
				onKetUp={e => {
					props.onKeyUp(e.target.value);
			}}/>
		</div>
	);
};

export default VideoInput;