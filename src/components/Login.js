import React, { useRef, useState } from "react";
import Header from "./Header";
import { validateFormData } from "../utils/validate";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [erroMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passRef = useRef(null);

  const toggleSignInform = () => {
    setIsSignInForm(!isSignInForm);
    setErrorMessage(null);
  };

  const handleClick = () => {
    //validate form data
    const validationMessage = validateFormData(
      emailRef.current.value,
      passRef.current.value,
      isSignInForm ? null : nameRef.current.value
    );
    setErrorMessage(validationMessage);

    //if we have some error messege we return in below or else proceed to sigin/signup
    if (validationMessage) return;

    if (!isSignInForm) {
      //sign up
      createUserWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passRef.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: nameRef.current.value,
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({ uid: uid, email: email, displayName: displayName })
              );
              navigate("/browse"); //move user to browse page if he signs up
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorText = error.message;

          const parts = errorText.split("/"); // Split the string by '/'
          const lastPart = parts[parts.length - 1];
          const extractedMessage = lastPart.split(").")[0].replace(/-/g, " ");
          setErrorMessage(extractedMessage);
        });
    } else {
      //sign in
      signInWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passRef.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          navigate("/browse"); //move user to browse page if he signs in
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorText = error.message;

          const parts = errorText.split("/");
          const lastPart = parts[parts.length - 1];
          const extractedMessage = lastPart.split(").")[0].replace(/-/g, " ");

          setErrorMessage(extractedMessage);
        });
    }
  };

  return (
    <>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/893a42ad-6a39-43c2-bbc1-a951ec64ed6d/1d86e0ac-428c-4dfa-9810-5251dbf446f8/IN-en-20231002-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="login-background"
        />
      </div>
      <form
        onClick={(e) => e.preventDefault()}
        className="bg-black absolute w-4/12 p-12 mt-28 mx-auto left-0 right-0 text-white rounded-lg bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-4 text-left">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={nameRef}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full rounded-lg text-black"
          />
        )}
        <input
          type="email"
          placeholder="Email adress"
          className="p-4 my-4 w-full rounded-lg text-black"
          ref={emailRef}
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full rounded-lg text-black"
          ref={passRef}
        />
        {erroMessage && (
          <p className="p-2 font-bold text-lg text-red-600">{erroMessage}</p>
        )}
        <button
          onClick={handleClick}
          className="p-4 mt-6 border border-black rounded-lg bg-red-600 w-full"
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-2 cursor-pointer" onClick={toggleSignInform}>
          {isSignInForm
            ? "New to Netflix ? Sign Up"
            : "Already registered, Sign In"}
        </p>
      </form>
    </>
  );
};

export default Login;
