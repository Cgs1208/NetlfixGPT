import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";

const useMovietrailer = (movieId) => {
  //fetch trailer video and updating stoe with trailer key
  const dispatch = useDispatch();
  const trailerKey = useSelector((store) => store.movies?.trailerVideo);

  const getMovieTrailer = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );
    const json = await data.json();
    const trailers = json.results.filter(
      (trailer) => trailer.type === "Trailer"
    );
    //if we get two trailer videos if use first or if there is none we use first of json response
    const trailer = trailers.length ? trailers[0] : json.results[0];
    dispatch(addTrailerVideo(trailer?.key));
  };

  useEffect(() => {
    !trailerKey && getMovieTrailer();
  }, []);

  return trailerKey;
};

export default useMovietrailer;
