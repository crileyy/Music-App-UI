import React, { Component } from 'react';
import PropTypes from 'prop-types';

let loadYT

export default class YouTubeTest extends Component {
    componentDidMount () {
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
                    onStateChange: this.onPlayerStateChange,
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

    render () {
        return (
            <section className='youtubeComponent-wrapper'>
                <div ref={(r) => { this.youtubePlayerAnchor = r }}></div>
            </section>
        )
    }
}

YouTubeTest.propTypes = {
    YTid: PropTypes.string.required,
    width: PropTypes.number,
    height: PropTypes.number,
    onStateChange: PropTypes.func
}