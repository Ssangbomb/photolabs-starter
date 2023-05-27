import React from 'react';
import '../styles/PhotoDetailsModal.scss'
import PhotoFavButton from '../components/PhotoFavButton';
import PhotoListItem from '../components/PhotoListItem';
import '../styles/PhotoListItem.scss';

export const PhotoDetailsModal = (props) => {
  console.log(props)
  const mappedPhotos = props.photoDetail.similar_photos.map((photo) => {
    return <PhotoListItem 
    key={photo.id}
    username={photo.user.username} 
    profile={photo.user.profile}
    imagefullsource={photo.urls.full}
    imageSource={photo.urls.regular}
    city={photo.location.city} 
    />
  })
  const handleClick = () => {
    props.closemodal({type: "CLOSE_PHOTO"})
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
        <PhotoFavButton dispatch={props.dispatch}/>
        <img src={props.photoDetail.imagefullsource} className='.photo-details-modal--image'/>
        <div className='photo-details-modal--photographer-details'>
        <div className='photo-list--user-details'>
          <img src={props.photoDetail.profile} className='photo-list--user-profile'/>
          <div>
            <div className='.photo-list--user-info'>{ props.photoDetail.username }</div>
            <div className='photo-list--user-location '>{ props.photoDetail.country }</div>
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