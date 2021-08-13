import React from "react";
import NULLJPG from "./null.jpg";

const Cards = ({ Data }) => {
  return (
    <section className="flex justify-center flex-wrap">
      {Data.map((item, key) => {
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
                {item.release_date && item.release_date.substring(0, 4)}
              </p>
              <p className="mt-2 text-gray-700 text-base">{item.overview}</p>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Cards;
