import React, { useState } from "react";
import Cards from "../components/Cards";
import Navbar from "../components/Navbar";
import Searchbar from "../components/Searchbar";

const Home = () => {
  const [Data, setData] = useState([]);
  const [Query, setQuery] = useState("");
  return (
    <div>
      <Navbar />
      <Searchbar setData={setData} Query={Query} setQuery={setQuery} />
      <Cards Data={Data} />
    </div>
  );
};

export default Home;
