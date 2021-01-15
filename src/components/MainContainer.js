import React from 'react';
import { connect } from "react-redux";
import Main from './Main';
import { getPhotos } from '../redux/main-reducer';
import Preloader from './Preloader';
import Footer from './Footer';

class MainContainer extends React.Component {
    componentDidMount(){
       this.props.getPhotos();
    }
    
    render() {
        return (
            <>
            <Main 
                photos={this.props.photosData}
            />
            {this.props.isLoading ? <Preloader/> : null}
            <Footer/>
            </>
             
        )
    }
}

let mapStateToProps = (state) =>{
    return {
        photosData: state.mainPage.photosData,
        isLoading: state.mainPage.isLoading
    }
}

export default connect(mapStateToProps, {getPhotos})(MainContainer);