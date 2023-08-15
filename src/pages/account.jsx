import { useEffect, useState } from "react";
import { db } from "../firebase";
import { onSnapshot, doc, updateDoc } from "firebase/firestore";
import { UserAuth } from "../AuthContext";
import { MdDelete } from "react-icons/md";

function Account() {
  const { user } = UserAuth();
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
      setMovies(doc?.data()?.savedShow);
    });
  }, [user]);
  const ref = doc(db, "users", `${user?.email}`);
  const deleteShow = async (id) => {
    const res = movies.filter((movie) => movie.id !== id);
    try {
      updateDoc(ref, {
        savedShow: res,
      });
    } catch (error) {
      console.log(error.message);
    }
    await updateDoc(ref, {
      savedShow: res,
    });
  };

  return (
    <div className="h-screen flex w-full justify-center items-center relative  ">
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/6c884f48-f7d8-4a59-9d25-b7c138813aee/8db2c637-af3a-4cc7-a59e-edec17f7a102/DZ-fr-20230807-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        alt=""
        className="h-full w-full object-cover absolute "
      />
      <div className="text-white bg-black/50 z-50 w-[80%] h-[70%] md:h-[80%] md:w-[90%] rounded   grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5  p-4 overflow-y-auto ">
        {/* {console.log(movies)} */}
        {movies?.map((movie) => {
          return (
            <div
              className=" text-white h-[250px] rounded  relative cursor-pointer transition-all duration-400 group"
              key={movie.id}
            >
              <img
                className="w-full h-full object-cover"
                src={`https://image.tmdb.org/t/p/w500/${movie?.img}`}
                alt={movie?.title}
              />
              <MdDelete
                onClick={() => deleteShow(movie.id)}
                className=" absolute right-2 top-2  hover:text-red-600 text-2xl opacity-0 transition-all duration-700 group-hover:opacity-100  text-white"
              />
              <div className=" absolute w-full h-[20%] bg-gradient-to-t group-hover:h-[25%] transition-all duration-300 from-white via-white/50 to-white/0  z-50 bottom-0 left-0 flex items-end ">
                <p className="text-sm text-black font-semibold">
                  {movie?.title}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="h-full w-full absolute bg-black/70 top-0 left-0"></div>
    </div>
  );
}

export default Account;
