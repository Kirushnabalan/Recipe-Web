import React from "react";
import Header from "../commponents/Header";
import SearchBar from "../commponents/SearchBar";
import Foods from "../commponents/Foods";

const Home = () => {
  return (
    <div>
      <Header />
      <SearchBar />
      <Foods />
    </div>
  );
};

export default Home;
