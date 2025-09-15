import React from "react";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "../firebase.js";
import { useDispatch } from "react-redux";
import { signinSuccess } from "../redux/user/userSlice.js";
import { useNavigate } from 'react-router-dom';

function Oauth() {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const handleGoogleClick = async () => {
    try {
      const provider = new GoogleAuthProvider();
      console.log("Your here ", app);
      const auth = getAuth(app);
      console.log("Your here ", app);
      const result = await signInWithPopup(auth, provider);
      // console.log(result);
      const response = await fetch("/api/auth/google", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: result.user.displayName,
          email: result.user.email,
          photo: result.user.photoURL,
        }),
      });
      console.log("Here response data is ",response);
      const data = await response.json();
      // console.log("Here data is ",data);
      dispatch(signinSuccess(data));
      navigate('/')
    } catch (error) {
      console.log("Could not signin in with google", error);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <button
        onClick={handleGoogleClick}
        type="button"
        className="bg-red-700 text-white p-3 rounded-lg uppercase hover:opacity-95"
      >
        Continue with Google
      </button>
    </div>
  );
}

export default Oauth;
