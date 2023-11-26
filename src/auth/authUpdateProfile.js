import { updateProfile } from "firebase/auth";
import { auth } from "../config/firebase";

export const authUpdateProfile = (name, photoUrl) => {
  updateProfile(auth.currentUser, {
    displayName: name,
    photoURL: photoUrl,
  })
    .then(() => {
      // Profile updated!
      // ...
    })
    .catch((error) => {
      console.error(`error when updating profile \n ${error}`);
    });
};
