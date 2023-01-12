import React from 'react';
import "../Styling/NewsCard.css";

const NewsCard = (props) => {

    let {title, description, urlToImage, url} = props;

    return (
        <div className='newsCard'>
            <img src={urlToImage} alt="" className="newsImage" />
            <div className="newsBody">
                <div className='contentHeight'>
                <h3 className='newsTitle'>{title}</h3>
                <p className="newsDescription">{description}</p>
                </div>
                <button className='readNews'>
                <a href={url} target="_blank" className="newsLink">Read More</a>
                </button>
            </div>
        </div>
    )
}

export default NewsCard