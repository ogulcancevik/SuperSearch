import React from "react";
import axios from "axios";

const Searchbar = ({setData, Query, setQuery }) => {
  const Search = (e) => {
    if (e.key === "Enter") {
      if (Query === "" || Query === []) {
        alert(
          "You did an empty search, when I say empty I mean the search bar is empty or I can't find anything. :)"
        );
      }
      const URL = `https://api.themoviedb.org/3/search/multi?api_key=aa7ae602c0b7e0c89de15b78fa599136&language=en-US&query=${Query}&page=1&include_adult=false`;
      axios.get(URL).then((response) => {
        const data = response.data.results;
        console.log(data);
        setData(data);
        setQuery("");
      });
    }
  };

  return (
    <section className="mt-8 mb-3 flex justify-center">
      <input
        className="border rounded-md w-80 p-2 text-center"
        type="text"
        placeholder="Let's look for a movie or TV show."
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={Search}
      />
    </section>
  );
};

export default Searchbar;
