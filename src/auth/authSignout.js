import { signOut } from "firebase/auth";
import { auth } from "../config/firebase";

export const authSignout = () => {
    signOut(auth).then(() => {
        console.log('Signed out')
    }).catch((error) => {
        console.error(error)
    });
}