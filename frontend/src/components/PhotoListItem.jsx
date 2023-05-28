
import React from 'react';
import PhotoFavButton from './PhotoFavButton';
import '../styles/PhotoListItem.scss';

const PhotoListItem = (props) => {
  console.log(props)
  const isFavorite = props.favorites.includes(props.id)
  const setIsFavorite = () => {
    props.toggleFavorite(props.id)
  }

  return (
    <div className='photo-list--item'>
      <PhotoFavButton setIsFavorite={setIsFavorite} isFavorite={isFavorite}/>
        {props.showModal ? <img src={ props.imagefullsource}  className='photo-list--fullimage' onClick={() => {props.openPhoto(props.id)}}/> : <img src={ props.imageSource }  className='photo-list--image' onClick={() => {props.openPhoto(props.id)}}/>}
        <div className='photo-list--user-details'>
          <img src={props.profile} className='photo-list--user-profile'/>
          <div>
            <div className='.photo-list--user-info'>{ props.username }</div>
            <div className='photo-list--user-location '>{ props.city }</div>
          </div>
        </div>
    </div>
  )
}

export default PhotoListItem