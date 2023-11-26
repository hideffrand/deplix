import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";

export const authLoginEmailFirebase = (email, password) => {
  return new Promise((resolve, reject) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Successfully logged in
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
