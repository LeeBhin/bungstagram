import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { app } from "./firebase";

const auth = getAuth(app);

export const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
        const result = await signInWithPopup(auth, provider);
        console.log(result.user);
    } catch (error) {
        console.error(error);
    }
};

export const signInWithGithub = async () => {
    const provider = new GithubAuthProvider();
    try {
        const result = await signInWithPopup(auth, provider);
        console.log(result.user);
    } catch (error) {
        console.error(error);
    }
};