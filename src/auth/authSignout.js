import { getAuth, signOut } from "firebase/auth";
import { app } from "../config/firebase";

export const authSignout = () => {
    const auth = getAuth(app);
    signOut(auth).then(() => {
        console.log('Signed out')
    }).catch((error) => {
        console.error(error)
    });
}