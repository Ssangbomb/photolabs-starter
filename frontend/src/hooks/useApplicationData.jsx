import { useReducer } from "react";

/* insert app levels actions below */
export const ACTIONS = {
  FAV_PHOTO_TOGGLED: 'FAV_PHOTO_TOGGLED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  CLOSE_PHOTO: 'CLOSE_PHOTE'
}

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.FAV_PHOTO_TOGGLED:
      return {...state, favorites: action.payload};
    case ACTIONS.SET_PHOTO_DATA:
      return {...state, photoData: action.payload};
    case ACTIONS.SELECT_PHOTO:
      return {...state, showModal: !state.showModal};
    case ACTIONS.CLOSE_PHOTO:
      return {...state, showModal: !state.showModal};
    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
}

export default function useApplicationData  () {
  const [state, dispatch] = useReducer(reducer, {favorites:[], photoData:{}, showModal:false})
  const toggleFavorite = (id) => {
    const currentFavorites = [...state.favorites];
    if (state.favorites.includes(id)) {
      const index = currentFavorites.findIndex((findId) => {
        return findId = id;
      })
      currentFavorites.splice(index, 1);
    } else {
      currentFavorites.push(id);
    }
    dispatch({type: ACTIONS.FAV_PHOTO_TOGGLED, payload: currentFavorites})
  }
  
  const setPhotoData = (photoData) => {
    if (state.showModal) {
      return
    }
    dispatch({type: ACTIONS.SET_PHOTO_DATA, payload: photoData});
  }

  const selectPhoto = () => {
    dispatch({type: ACTIONS.SELECT_PHOTO})
  }

  const closePhoto = () => {
    dispatch({type: ACTIONS.CLOSE_PHOTO})
  }
  return {
    state, 
    toggleFavorite,
    setPhotoData,
    closePhoto,
    selectPhoto
  }
}

