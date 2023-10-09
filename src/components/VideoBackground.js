import React from "react";

import useMovietrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const trailerKey = useMovietrailer(movieId);

  const youtubeEmbedUrl = `https://www.youtube.com/embed/${trailerKey}?si=AKVpsjrqvw3DOmbL&autoplay=1&mute=1`;

  return (
    <div>
      <iframe
        className="w-screen aspect-video pt-[7%] md:pt-0"
        src={youtubeEmbedUrl}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
