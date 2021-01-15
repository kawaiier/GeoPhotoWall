import { commentsAPI } from "../api/api";
const SET_PHOTOS = "SET-PHOTOS";
const TOGGLE_IS_LOADING = "TOGGLE-IS-LOADING";

let initialState = {
  photosData: [],
  isLoading: false,
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PHOTOS: {
      return {
        ...state,
        photosData: action.photos,
      };
    }
    case TOGGLE_IS_LOADING: {
      return {
        ...state,
        isLoading: action.isLoading,
      };
    }
    default:
      return state;
  }
};

export const setPhotos = (photos) => ({ type: SET_PHOTOS, photos });
export const toggleIsLoading = (isLoading) => ({
  type: TOGGLE_IS_LOADING,
  isLoading,
});

export const getPhotos = () => {
  return (dispatch) => {
    dispatch(toggleIsLoading(true));
    commentsAPI.getPhotos().then((data) => {
      dispatch(setPhotos(data));
      dispatch(toggleIsLoading(false));
    });
  };
};

export default mainReducer;
