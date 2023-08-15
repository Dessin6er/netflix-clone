import { useEffect, useState } from "react";
import requests from "../request";
import axios from "axios";

async function getMovies() {
  const res = await axios(requests.requestPopular);
  return res;
}

function Main() {
  const [movies, setMovies] = useState([]);
  const randomMovie = Math.floor(Math.random() * movies.length);

  useEffect(() => {
    getMovies().then((d) => setMovies(d.data.results));
  }, []);

  let overview = movies[randomMovie]?.overview;

  if (overview?.length > 200) {
    overview = overview?.slice(0, 200) + "...";
  }

  return (
    <div className=" text-white w-full h-[550px] ">
      <div className="w-full h-full">
        <img
          className="w-full h-full object-cover"
          src={`https://image.tmdb.org/t/p/original/${movies[randomMovie]?.backdrop_path}`}
          alt={movies[randomMovie]?.title}
        />
        <div className="w-full h-[550px] bg-gradient-to-r from-black/90 via-black/40  to-black/0  absolute top-0 left-0"></div>
      </div>
      <div className="w-[80%] md:w-[70%] lg:w-[50%] h-full absolute top-[30%] p-4 md:p-8 left-0 text-white">
        <h2 className=" pb-4 text-2xl">{movies[randomMovie]?.title}</h2>
        <div className="">
          <button className=" bg-slate-200 border-2  text-black px-5 p-3">
            Play
          </button>
          <button className=" border-2  ml-2 px-4 p-3">Watch Later</button>
        </div>
        <p className=" text-gray-400 text-sm pt-4">
          Released: {movies[randomMovie]?.release_date}
        </p>
        <p className=" text-gray-300 text-[14px] ">{overview}</p>
      </div>
    </div>
  );
}

export default Main;
