import React from 'react';
import PhotoListItem from './PhotoListItem';
import '../styles/PhotoList.scss';

const PhotoList = (props) => {
  const mappedPhotos = props.photos.map((photo) => {
    return <PhotoListItem 
    key={photo.id}
    id={photo.id}
    similar_photos={photo.similar_photos}
    username={photo.user.username} 
    profile={photo.user.profile}
    imagefullsource={photo.urls.full}
    imageSource={photo.urls.regular}
    city={photo.location.city} 

    openPhoto={props.openPhoto}
    toggleFavorite={props.toggleFavorite}
    favorites={props.favorites}
    showModal={props.showModal}
    />
  })
  
  return (
    <ul className="photo-list">
      { mappedPhotos }
   </ul>
  )
}

export default PhotoList