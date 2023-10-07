import React from "react";

import useMovietrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const trailerKey = useMovietrailer(movieId);

  const youtubeEmbedUrl = `https://www.youtube.com/embed/${trailerKey}?si=AKVpsjrqvw3DOmbL&amp;start=35&autoplay=1&mute=1`;

  return (
    <div>
      <iframe
        className="w-screen aspect-video "
        src={youtubeEmbedUrl}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;

// {
//   "id": 615656,
//   "results": [
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "The Making of Meg 2: The Trench",
//       "key": "UhS-GJRPhw8",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Behind the Scenes",
//       "official": true,
//       "published_at": "2023-09-22T15:00:25.000Z",
//       "id": "650df6c711c06600acfb32a6"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Make a Stand",
//       "key": "94NhiwjR6fw",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Clip",
//       "official": true,
//       "published_at": "2023-09-20T15:00:13.000Z",
//       "id": "650b4f05d6c30000edeffe4d"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Up from the Depths: Even More Beasts",
//       "key": "YrFdtxb0CGI",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Behind the Scenes",
//       "official": true,
//       "published_at": "2023-09-14T15:00:33.000Z",
//       "id": "650b4f3cd6c300010e05c6af"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Get the Fuel",
//       "key": "1ay8gcgEtEg",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Clip",
//       "official": true,
//       "published_at": "2023-09-04T15:00:01.000Z",
//       "id": "650b4f2e501cf200e3c0f6b1"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Octopus Attack",
//       "key": "gkgxWJwY6Xw",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Clip",
//       "official": true,
//       "published_at": "2023-09-02T15:00:25.000Z",
//       "id": "650b4f18aede591aae7a8769"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Extended Preview",
//       "key": "NMSilJCThnc",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Clip",
//       "official": true,
//       "published_at": "2023-08-25T14:00:16.000Z",
//       "id": "64e91ebe06f98400ca55792a"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Good Luck",
//       "key": "A_EOMsqb4gM",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Clip",
//       "official": true,
//       "published_at": "2023-08-24T15:00:07.000Z",
//       "id": "64e81330e894a6013bb019ca"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Do you suffer from the following?",
//       "key": "Xh8lOrObhHs",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Teaser",
//       "official": true,
//       "published_at": "2023-08-04T20:53:00.000Z",
//       "id": "64e3a2f465e0a20139ffacea"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Big-A$$ Sharks",
//       "key": "ujp_0ws6nk0",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Teaser",
//       "official": true,
//       "published_at": "2023-08-04T20:31:29.000Z",
//       "id": "64d34a0adb4ed600e2b4dd5b"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "BTS from the Depths",
//       "key": "BU3e8cTsojc",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Featurette",
//       "official": true,
//       "published_at": "2023-08-03T21:00:06.000Z",
//       "id": "64cc85e7706e5600c9a0fc47"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Just a few of my fav local spots",
//       "key": "cPFlnJRp9N8",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Teaser",
//       "official": true,
//       "published_at": "2023-08-02T21:07:21.000Z",
//       "id": "64e3a2c4d7cd06013cbde8a9"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Meg on the Thames",
//       "key": "9h9QnLuucPY",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Featurette",
//       "official": true,
//       "published_at": "2023-08-01T14:50:58.000Z",
//       "id": "64ca6a990b74e900ea8bc35a"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Exist",
//       "key": "xxyJRvI41k0",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Teaser",
//       "official": true,
//       "published_at": "2023-07-07T11:11:35.000Z",
//       "id": "64afd0eee24b935b32b045f2"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Fun Island",
//       "key": "27_JHKTmdZE",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Teaser",
//       "official": true,
//       "published_at": "2023-07-07T11:07:37.000Z",
//       "id": "64afd0bae24b935b30a2d706"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Transmission",
//       "key": "LptU9LtDSLA",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Teaser",
//       "official": true,
//       "published_at": "2023-07-07T11:01:04.000Z",
//       "id": "64afd1376a3448012ce803c4"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Magic",
//       "key": "sWWeN8iEO88",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Teaser",
//       "official": true,
//       "published_at": "2023-05-19T14:26:20.000Z",
//       "id": "646826782bcf6700fe5ff377"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Official Trailer",
//       "key": "dG91B3hHyY4",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Trailer",
//       "official": true,
//       "published_at": "2023-05-08T22:00:15.000Z",
//       "id": "64597c0d156cc7013ff1b9d8"
//     }
//   ]
// }
