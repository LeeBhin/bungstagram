"use client";

import { FaGoogle } from 'react-icons/fa';
import { AiFillGithub } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';

import css from "../login/login.module.css";
import signSt from "../signup/signup.module.css";

import { app } from "../../../firebase/firebase";
import { useRouter } from 'next/navigation';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';

type ButtonType = {
    page: 'login' | 'signup';
};

const SocialLoginButton: React.FC<ButtonType> = ({ page }) => {

    const auth = getAuth(app);
    const router = useRouter();

    const signInWithGoogle = async () => {
        const provider = new GoogleAuthProvider();
        try {
            const result = await signInWithPopup(auth, provider);
            router.push('/');
        } catch (error) {
            console.error(error);
            alert(error);
        }
    };

    const signInWithGithub = async () => {
        const provider = new GithubAuthProvider();
        try {
            const result = await signInWithPopup(auth, provider);
            router.push('/');
        } catch (error) {
            alert(error);
        }
    };

    const handleLogin = (provider: 'google' | 'github') => {
        if (provider === 'google') {
            signInWithGoogle();
        } else {
            signInWithGithub();
        }
    };

    const renderButton = () => (
        <div className={css.socialLogin} id={page === 'signup' ? signSt.signSocialLogin : ''}>
            <div className={css.google} id={page === 'signup' ? signSt.signSocial : ''} onClick={() => handleLogin('google')}>
                <span className={page === 'signup' ? signSt.socialIcon : css.socialIcon}>
                    {page === 'signup' ? <FaGoogle /> : <FcGoogle />}
                </span>
                Google로 로그인
            </div>
            <div className={css.github} id={page === 'signup' ? signSt.signSocial : ''} onClick={() => handleLogin('github')}>
                <span className={page === 'signup' ? signSt.socialIcon : css.socialIcon}><AiFillGithub /></span>
                Github로 로그인
            </div>
        </div>
    );

    return <div>{renderButton()}</div>;
};

export default SocialLoginButton;
