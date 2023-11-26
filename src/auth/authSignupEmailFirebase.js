import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";
import { useNavigate } from "react-router-dom";

export const authSignupEmailFirebase = (email, password) => {
  return new Promise((resolve, reject) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Successfully signed un
        const user = userCredential.user;
        resolve(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(
          `Error when login using email and password \n errorCode: ${errorCode} \n errorMessage: ${errorMessage}`
        );
        reject({ errorCode, errorMessage });
      });
  });
};
