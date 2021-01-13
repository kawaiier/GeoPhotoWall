import { commentsAPI } from '../api/api';
const SET_PHOTOS = 'SET-PHOTOS';

let initialState = {
    photosData:[]
};

const mainReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_PHOTOS: {
            return {
                ...state,
                photosData: action.photos
            }
        }
        default:
            return state;

    }
}

export const setPhotos = (photos) => ({type: SET_PHOTOS, photos})

export const getPhotos = () => {
    return (dispatch) => {
        commentsAPI.getPhotos().then(data => {
            dispatch(setPhotos(data))
        })
    }
}

export default mainReducer;