/**
 * Created by criley on 4/29/18.
 */

import React from 'react';

let loadYT

class YouTube extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        if (!loadYT) {
            loadYT = new Promise((resolve) => {
                const tag = document.createElement('script')
                tag.src = 'https://www.youtube.com/iframe_api'
                const firstScriptTag = document.getElementsByTagName('script')[0]
                firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)
                window.onYouTubeIframeAPIReady = () => resolve(window.YT)
            })
        }
        loadYT.then((YT) => {
            this.player = new YT.Player(this.youtubePlayerAnchor, {
                height: this.props.height || 390,
                width: this.props.width || 640,
                videoId: this.props.YTid,
                events: {
                    onStateChange: this.onPlayerStateChange, // TODO need 'onReady': onPlayerReady,'onStateChange': onPlayerStateChange
                    onReady: this.onPlayerReady
                }
            })
        })
    }

    onPlayerStateChange = (e) => {
        if (typeof this.props.onStateChange === 'function') {
            this.props.onStateChange(e)
        }
    }

    onPlayerReady(event) {
        event.target.playVideo();
    }

    render() {
        return (
            <section className='youtubeComponent-wrapper'>
                <div ref={(r) => {
                    this.youtubePlayerAnchor = r
                }}></div>
            </section>
        )
    }
}

export default YouTube;
