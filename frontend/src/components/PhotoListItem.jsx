
import React from 'react';
import PhotoFavButton from './PhotoFavButton';
import '../styles/PhotoListItem.scss';

const PhotoListItem = (props) => {
  const photoDetail = () => {
    props.showmodal({type: 'SELECT_PHOTO'});
    props.detailphoto(props);
  }
  return (
    <div className='photo-list--item'>
      <PhotoFavButton dispatch={props.dispatch}/>
        <img src={ props.imageSource }  className='photo-list--image' onClick ={photoDetail}/>
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