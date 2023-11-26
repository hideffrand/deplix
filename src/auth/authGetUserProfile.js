import { auth } from "../config/firebase";

export const authGetUserProfile = () => {
  const user = auth.currentUser;
  if (user !== null) {
    const userProfile = {
      displayName: user.displayName,
      email: user.email,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified,
    };
    const uid = user.uid;
    return userProfile;
  }
};
