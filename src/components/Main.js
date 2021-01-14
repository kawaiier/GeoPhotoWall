import React from 'react';
import Post from './Post';

let Main = (props) => {
    return (
    <>
        <h1>This is GEORGIA 📷  🇬🇪 ❤️</h1>
        <div className="Feed">
            {props.photos.map(photo => <Post img={photo}/>)}
        </div>
    </>
    )
}

export default Main;