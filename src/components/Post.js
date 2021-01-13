import React from 'react';

const Post = (props) => {
    return (
        <div className="Post">
          <a href={props.img.url} target='_blank'>
            <img src={props.img.src.medium}/>
          </a>
        </div>
    );
};

export default Post;