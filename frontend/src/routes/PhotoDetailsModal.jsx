import React from 'react';
import '../styles/PhotoDetailsModal.scss'
import PhotoFavButton from '../components/PhotoFavButton';
import PhotoListItem from '../components/PhotoListItem';
import '../styles/PhotoListItem.scss';

export const PhotoDetailsModal = (props) => {
  const isFavorite = props.favorites.includes(props.id)
  const setIsFavorite = () => {
    props.toggleFavorite(props.id)
  }

  const mappedPhotos = props.photoData.similar_photos.map((photo) => {
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
    />
  })
  const handleClick = () => {
    props.closePhoto()
  }
  return (
    <div className='photo-details-modal'>
      <div className='photo-details-modal--top-bar'>
        <button className='photo-details-modal--close-button' onClick={handleClick}>
          <svg width="24" height="24" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_428_287)">
              <path d="M14.0625 3.9375L3.9375 14.0625" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M14.0625 14.0625L3.9375 3.9375" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
            </g>
            <defs>
              <clipPath id="clip0_428_287">
              <rect width="18" height="18" fill="white"/>
              </clipPath>
            </defs>
          </svg>
        </button>
      </div>
      <div >
        <div className='.photo-details-modal--image'>
          <PhotoFavButton setIsFavorite={setIsFavorite} isFavorite={isFavorite}/>
          <img src={props.photoData.urls.full} className='photo-list--fullimage' />
        </div>
        <div className='photo-details-modal--photographer-details'>
        <div className='photo-list--user-details'>
          <img src={props.photoData.user.profile} className='photo-list--user-profile'/>
          <div>
            <div className='.photo-list--user-info'>{ props.photoData.user.name }</div>
            <div className='photo-list--user-location '>{ props.photoData.user.country }</div>
          </div>
        </div>
        </div>
      </div>
        <div className='photo-details-modal--header'> similar Photos</div>
        <div className='photo-details-modal--images'>
          {mappedPhotos}
        </div>
  </div>
  )
}

export default PhotoDetailsModal;