import React, { useEffect, useState } from 'react';
import HomeRoute from './routes/HomeRoute';
import './App.scss';
import PhotoDetailModal from  './routes/PhotoDetailsModal'
import useApplicationData from './hooks/useApplicationData';



// Note: Rendering a single component to build components in isolation
const App = () => {
  const [photos, setPhotos] = useState([]);
  const [topics, setTopics] = useState([]);
  // const [modal, setModal] = useState(false);
  const [searchTerm, setSerchTerm] = useState('');

  
  
  const openitem = (id) => {
    fetch(`/api/topics/photos/${id}`)
      .then(res => res.json())
      .then(data => { setPhotos([...data])})
  }
  useEffect(() => {
    fetch('/api/photos')
      .then(res => res.json())
      .then(data => { setPhotos([...data])})
  }, []);

  useEffect(() => {
    fetch('/api/topics')
      .then(res => res.json())
      .then(data => { setTopics([...data])})
  }, []);

  const handleChange = (event) => {
    event.preventDefault();
    setSerchTerm(event.target.value);
  };
  
  const filterPhoto = photos.filter((photo) => {
    const username = photo.user.username;
    const city = photo.location.city
    if (username.toLowerCase().includes(searchTerm.toLowerCase())) {
      return photo
    } else if (city.toLowerCase().includes(searchTerm.toLowerCase())) {
      return photo
    }
  })

  const {
    state,
    toggleFavorite,
    setPhotoData,
    closePhoto,
    selectPhoto
  } = useApplicationData(); 

  const openPhoto = (id) => {
    const singlePhoto = photos.find((photo) => {
      return photo.id === id;
    })
    setPhotoData(singlePhoto);
    selectPhoto();
  } 
  return(
  <div className="App">
    {state.showModal && <PhotoDetailModal
      photoData={state.photoData}
      toggleFavorite={toggleFavorite}
      closePhoto={closePhoto}
      favorites={state.favorites}
      openPhoto={openPhoto}
    />}
    <HomeRoute 
      photos={filterPhoto} 
      handlechange={handleChange}
      searchterm={searchTerm}
      topics={topics}
      openitem={openitem}
      toggleFavorite={toggleFavorite}
      openPhoto={openPhoto}
      favorites={state.favorites}
      showModal={state.showModal}
    />
  </div>
  )
}


export default App