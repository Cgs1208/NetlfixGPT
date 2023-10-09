import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";
import {
  NETFLIX_LOGO,
  SUPPORTED_LANGUAGES,
  Supported_Languages,
  USER_AVATAR,
} from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const isGptSearchPage = useSelector((store) => store.gpt.showGptSearch);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is Signed in/Signed up
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        // User is Signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  const handleSingnOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/");
      });
  };

  const handleGptSearchClick = () => {
    //Toggle GPT search
    dispatch(toggleGptSearchView());
  };

  const handlerLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="justify-between w-full absolute px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row">
      <img src={NETFLIX_LOGO} alt="logo" className="w-44 mx-auto md:mx-0" />
      {user && (
        <div className="flex justify-between">
          {isGptSearchPage && (
            <select
              className="px-2 mx-1 mt-3 h-11 bg-gray-900 text-white rounded-md"
              onClick={handlerLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            onClick={handleGptSearchClick}
            className="font-bold text-white bg-orange-400 h-auto md:h-9 px-2 md:px-4 py-1 md:py-0 mt-4 mx-2 rounded-md"
          >
            {isGptSearchPage ? "Home Page" : "GPT Search"}
          </button>
          <img
            src={USER_AVATAR}
            alt="user-icon"
            className="hidden md:inline-block w-9 h-9 mt-4 mr-2 rounded-md"
          />
          <button
            onClick={handleSingnOut}
            className="font-bold text-white bg-red-500 h-auto md:h-9 px-2 md:px-4 py-1 md:py-0 mt-4 rounded-md"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
}

export default Header;
