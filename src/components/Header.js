import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { removeUser } from "../utils/userSlice";

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSingOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
        navigate("/");
      })
      .catch((error) => {
        navigate("/");
      });
  };

  return (
    <div className="flex justify-between w-full absolute px-8 py-2 bg-gradient-to-b from-black z-10">
      <img
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
        className="w-44"
      />
      {user && (
        <div className="flex justify-between">
          <img
            src="https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.webp"
            alt="user-icon"
            className="w-9 h-9 mt-4 mr-2 rounded-md"
          />
          <button
            onClick={handleSingOut}
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
