import { useState , useReducer } from "react";

/* insert app levels actions below */
export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  CLOSE_PHOTO: 'CLOSE_PHOTE',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS'
}

function reducer(state, action) {
  switch (action.type) {
    case "FAV_PHOTO_ADDED":
      return state + 1;
    case "FAV_PHOTO_REMOVED":
      return state - 1;
    case "SELECT_PHOTO":
      return state = true;
    case "CLOSE_PHOTO":
      return state = false;
    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
}

export default function useApplicationData  () {
  const [photoDetail, setPhotoDetial] = useState({})
  const [state, dispatch] = useReducer(reducer, 0)
  
  const detailPhoto = (info) => {
    setPhotoDetial(info);
  }
  return [
    state, 
    dispatch,
    detailPhoto,
    photoDetail
  ]
}

