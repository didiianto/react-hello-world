import React from 'react';
import './YouTubeComp.css'

const YouTubeComp = (props) => {
    return <div className="youtube-wrapper">
        <div className="img-thumb">
            <img src="https://i.ytimg.com/vi/exSqXDFwQYI/hqdefault.jpg?sqp=-oaymwEZCOADEI4CSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCvj7rBQ1yt73SA9s6jYPahLiiV9A" alt="" />
            <p className="time">{props.time}</p>
        </div>
        <p className="title">{props.title}</p>
        <p className="desc">{props.desc}</p>
    </div>
}

//jika tidak diset props
YouTubeComp.defaultProps = {
    time: '12.00',
    title: 'title here',
    desc: 'desc here'
}

export default YouTubeComp;