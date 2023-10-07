# Netflix GPT

- App is built with crete-react-app
- Tailwind Css consfigured
- Configured React-Router-DOM
- Header
- Routing of app
- Login Form
- Sign Up form
- Form validation
- useRef hook used for form fields
- Firebase setup
- signup and signin using firebase authentication
- Redux store with userSlice
- implemented signout
- update profile api from firebase
- BugFix -> if the user is not logged in then redirect /browse to login page & vice versa
- unsubscribe onAuthStateChange callback
- register tmdb api , create app , get access token
- use token to make api calls to tmdb servers
- custom hook for nowPlayingMovies
- created movie slice
- update store with movie list
- fetch data for trailer video
- update store with trailer data
- embedded youtube video trailer
- added autoplay with mute
- buuilt secondary container
- built movie list
- built movie cards
- TMDB movie image with cdn url
- usePopularMovie, useTopRatedMovies, useUpcomingMovies custom hook
- gpt search feature
- Multi-language for gpt search page

# Features

- Login/Signup
  - Sign In / Sign Up form
  - on submission redirect to browse page
- Browse page (after authentication)
  - Header
  - Main Movie
    - Trailer in background
    - Title and description
  - Movie suggestions
    - Movie List \* N (vertically scrollable)
- Netlfix gpt page

  - Search bar
  - Movie suggestions

- BROWSE PAGE
  - MainContainer
    - videoBackground (playing)
    - videoTitle
  - SecondaryContainer
    - Movielist \* n (vertical lists)
    - MovieCards \*n (horizontally)
