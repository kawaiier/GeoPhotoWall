import React from 'react';
import { connect } from "react-redux";

import Main from './Main';
import { getPhotos } from '../redux/main-reducer';

class MainContainer extends React.Component {
    componentDidMount(){
       this.props.getPhotos();
    }

    render() {
        return (
            <Main 
                photos={this.props.photosData}
            />
        )
    }
}

let mapStateToProps = (state) =>{
    return {
        photosData: state.mainPage.photosData
    }
}

export default connect(mapStateToProps, {getPhotos})(MainContainer);