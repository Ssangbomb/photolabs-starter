import React from 'react';
import PhotoListItem from './PhotoListItem';
import '../styles/PhotoList.scss';

const PhotoList = (props) => {
  const mappedPhotos = props.photos.map((photo) => {
    return <PhotoListItem 
    key={photo.id}
    similar_photos={photo.similar_photos}
    username={photo.user.username} 
    profile={photo.user.profile}
    imagefullsource={photo.urls.full}
    imageSource={photo.urls.regular}
    city={photo.location.city} 

    dispatch={props.dispatch}
    showmodal={props.showmodal}
    detailphoto={props.detailphoto}
    />
  })
  
  return (
    <ul className="photo-list">
      { mappedPhotos }
   </ul>
  )
}

export default PhotoList