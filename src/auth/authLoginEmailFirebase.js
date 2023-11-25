import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../config/firebase";
import { useNavigate } from "react-router-dom";

export const authLoginEmailFirebase = (email, password) => {
    const navigate = useNavigate
    const auth = getAuth(app);
    signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            // Logged in
            // ..
            navigate("/")
      })
      .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.error(`Error when login using email and password \n errorCode: ${errorCode} \n errorMessage: ${errorMessage}`)
          return errorCode, errorMessage
      });
}