import React from 'react';

const Recipe = ({title, description, image, url}) => {
    return(
        <div className="recipe-item">
            <a href={url} target="_blank">
                <img src={image} />
                <div className="content">
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>
            </a>
        </div>
    );
}

export default Recipe;