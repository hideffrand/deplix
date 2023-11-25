import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../config/firebase";
import { useNavigate } from "react-router-dom";

export const authSignupEmailFirebase = (email, password) => {
    const navigate = useNavigate()
    const auth = getAuth(app);
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        // Signed up
        // ...
        navigate("/")
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(`Error when signup using email and password \n errorCode: ${errorCode} \n errorMessage: ${errorMessage}`)
        return errorCode, errorMessage
        // ..
      });
}