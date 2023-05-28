import React from "react";
import TopNavigationBar from "../components/TopNavigationBar";
import PhotoList from "../components/PhotoList";
import "../styles/HomeRoute.scss";

const HomeRoute = (props) => {
  return (
    <div className="home-route">
      <TopNavigationBar 
        topics={props.topics} 
        openitem={props.openitem} 
        isFavPhotoExist={props.favorites.length} 
        searchterm={props.searchterm}
        handlechange={props.handlechange}
      />
      <PhotoList
        photos={props.photos}
        openPhoto={props.openPhoto}
        toggleFavorite={props.toggleFavorite}
        favorites={props.favorites}
        showModal={props.showModal}
      />
    </div>
  );
};

export default HomeRoute;
