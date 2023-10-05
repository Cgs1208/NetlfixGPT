import React, { useRef, useState } from "react";
import Header from "./Header";
import { validateFormData } from "../utils/validate";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [erroMessage, setErrorMessage] = useState(null);

  const emailRef = useRef(null);
  const passRef = useRef(null);

  const toggleSignInform = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleClick = () => {
    //validate form data
    const validationMessage = validateFormData(
      emailRef.current.value,
      passRef.current.value
    );
    setErrorMessage(validationMessage);

    //proceed to signin/signup
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
          <p className="p-2 text-lg text-red-600">{erroMessage}</p>
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
