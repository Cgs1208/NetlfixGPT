import React, { useRef, useState } from "react";
import Header from "./Header";
import { validateFormData } from "../utils/validate";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { LOGIN_BACKGROUND } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [erroMessage, setErrorMessage] = useState(null);
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
      <div className="fixed w-full h-full">
        <img
          className="w-full h-full object-cover"
          src={LOGIN_BACKGROUND}
          alt="login-background"
        />
      </div>

      <form
        onClick={(e) => e.preventDefault()}
        className="bg-black absolute w-9/12 md:w-4/12 p-10 mt-32 md:mt-28 mx-auto left-0 right-0 text-white rounded-lg bg-opacity-75"
      >
        <h1 className="font-bold text-xl md:text-3xl py-3 md:py-3 text-left">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={nameRef}
            type="text"
            placeholder="Full Name"
            className="p-3 md:p-4 my-3 md:my-4 w-full rounded-lg text-black"
          />
        )}
        <input
          type="email"
          placeholder="Email adress"
          className="p-3 md:p-4 my-3 md:my-4 w-full rounded-lg text-black"
          ref={emailRef}
        />
        <input
          type="password"
          placeholder="Password"
          className="p-3 md:p-4 my-3 md:my-4 w-full rounded-lg text-black"
          ref={passRef}
        />
        {erroMessage && (
          <p className="p-2 md:p-3 font-bold text-lg text-red-600">
            {erroMessage}
          </p>
        )}
        <button
          onClick={handleClick}
          className="p-3 md:p-4 mt-3 md:mt-5 border border-black rounded-lg bg-red-600 w-full"
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p
          className="pt-3 md:pt-4 mt-1 md:mt-2 cursor-pointer"
          onClick={toggleSignInform}
        >
          {isSignInForm
            ? "New to Netflix ? Sign Up"
            : "Already registered, Sign In"}
        </p>
      </form>
    </>
  );
};

export default Login;
