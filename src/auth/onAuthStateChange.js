import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "../config/firebase";

export const onAuthStateChange = () => {
    const auth = getAuth(app);
    onAuthStateChanged(auth, (user) => {
        if (user) {
            return true
        } else {
            return false
        }
    });
}