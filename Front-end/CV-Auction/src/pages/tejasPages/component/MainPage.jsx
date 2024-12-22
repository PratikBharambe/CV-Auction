import React from "react";
import "./mainPage.css";
import PageOne from "./PageOne";

const MainPage = () => {
  return (
    <div>
      <div className="ct">
        <div className="menu">
          <div className="menu_Info">
            <h1>Menu</h1>
          </div>
        </div>
        <div className="auction">
          <div className="acInfo">
            <h1>Auction</h1>
          </div>
        </div>
        <div className="search_bar">
          <div className="bar ">
            <h1>SearchBar</h1>
          </div>
        </div>
        <div className="car_cards">
          <PageOne />
          <PageOne />
          <PageOne />
          <PageOne />
          <PageOne />
          <PageOne />
          <PageOne />
          <PageOne />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
