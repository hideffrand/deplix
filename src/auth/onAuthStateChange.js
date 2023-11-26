import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebase";

export const onAuthStateChange = () => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            const uid = user.uid
            console.log(uid)
            return user.uid
        } else {
            console.error('Error onAuthStateChange')
        }
    });
}