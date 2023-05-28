import React from 'react';

import { FavIcon } from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {  
  const { isFavorite, setIsFavorite} = props;

  return (
    <div className="photo-list--fav-icon" onClick={setIsFavorite}>
      <div className="photo-list--fav-icon-svg">
        {/* Insert React */}
        < FavIcon fill={isFavorite === false ? 'none' : 'red'}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;