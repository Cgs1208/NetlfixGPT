import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";
import { NETFLIX_LOGO, USER_AVATAR } from "../utils/constants";

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

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

  return (
    <div className="flex justify-between w-full absolute px-8 py-2 bg-gradient-to-b from-black z-10">
      <img src={NETFLIX_LOGO} alt="logo" className="w-44" />
      {user && (
        <div className="flex justify-between">
          <img
            src={USER_AVATAR}
            alt="user-icon"
            className="w-9 h-9 mt-4 mr-2 rounded-md"
          />
          <button
            onClick={handleSingnOut}
            className="font-bold text-white bg-red-500 h-9 px-2 mt-4 rounded-md"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
}

export default Header;
