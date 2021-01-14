import React from 'react';

const Post = (props) => {
    return (
        <div className="Post">
          <a href={props.img.url} target='_blank' rel="noreferrer">
            <img src={props.img.src.medium} alt={props.img.photographer}/>
          </a>
        </div>
    );
};

export default Post;