import React from "react";
import TopNavigationBar from "../components/TopNavigationBar";
import PhotoList from "../components/PhotoList";
import "../styles/HomeRoute.scss";

const HomeRoute = (props) => {
  return (
    <div className="home-route">
      <TopNavigationBar topics={props.topics} openitem={props.openitem} isFavPhotoExist={props.state} />
      <PhotoList
        photos={props.photos}
        dispatch={props.dispatch}
        showmodal={props.showmodal}
        detailphoto={props.detailphoto}
      />
    </div>
  );
};

export default HomeRoute;
