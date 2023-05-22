import React, { useCallback, useState } from 'react';

import { FavIcon } from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  const [like, setLike] = useState(false);
  
  const handleClick = () => {
    like ? props.dispatch({type : 'FAV_PHOTO_ADDED'}) : props.dispatch({type : 'FAV_PHOTO_REMOVED'})
    setLike(!like);
  }
  return (
    <div className="photo-list--fav-icon" onClick={handleClick}>
      <div className="photo-list--fav-icon-svg">
        {/* Insert React */}
        < FavIcon fill={like === false ? 'none' : 'red'}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;