import React, { useEffect, useState } from 'react';
import HomeRoute from './routes/HomeRoute';
import './App.scss';
import PhotoDetailModal from  './routes/PhotoDetailsModal'
import useApplicationData from './hooks/useApplicationData';



// Note: Rendering a single component to build components in isolation
const App = () => {
  const [photos, setPhotos] = useState([]);
  const [topics, setTopics] = useState([]);
  const [modal, setModal] = useState(false);
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

  const showModal = () => {
    setModal(true);
  }

  const closeModal = () => {
    setModal(false);
  }

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

  const [
    state,
    dispatch,
    detailPhoto,
    photoDetail
  ] = useApplicationData();

  return(
  <div className="App">
    {modal && <PhotoDetailModal
      dispatch={dispatch}
      photos={photos} 
      photoDetail={photoDetail}
      closemodal={closeModal}
    />}
    <HomeRoute 
      photos={filterPhoto} 
      handlechange={handleChange}
      searchterm={searchTerm}
      topics={topics}
      openitem={openitem}
      showmodal={showModal}
      detailphoto={detailPhoto}
      dispatch={dispatch}
      state={state}
    />
  </div>
  )
}


export default App