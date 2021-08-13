import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import NULLJPG from "../components/null.jpg";

const PopularSeries = () => {
  const [Popular, setPopular] = useState([]);
  useEffect(() => {
    const URL =
      "https://api.themoviedb.org/3/tv/popular?api_key=aa7ae602c0b7e0c89de15b78fa599136";
    axios.get(URL).then((response) => {
      const data = response.data.results;
      setPopular(data);
    });
  }, []);
  return (
    <div>
      <Navbar />
      <section className="flex justify-center flex-wrap">
        {Popular.map((item, key) => {
          let IMG_PATH = `https://image.tmdb.org/t/p/w500${item.poster_path}`;
          return (
            <div
              className="dark:bg-themeDark-dark dark:text-themeDark-white m-5 max-w-sm rounded overflow-hidden shadow-lg card animate__animated animate__fadeIn"
              key={key}
            >
              <img
                src={item.poster_path == null || undefined ? NULLJPG : IMG_PATH}
                className="card-image-top w-100"
                alt="card images"
              />
              <div className="px-6 py-4">
                <p className="font-bold text-xl text-center">
                  {item.title == null || undefined ? item.name : item.title}
                </p>
                <p className="font-bold text-xl text-center">
                  {item.first_air_date && item.first_air_date.substring(0, 4)}
                </p>
                <p className="mt-2 text-gray-700 text-base">{item.overview}</p>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default PopularSeries;
