"use client";

import { FaGoogle } from 'react-icons/fa';
import { AiFillGithub } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import css from "../login/login.module.css";
import signSt from "../signup/signup.module.css";

type ButtonType = {
    page: 'login' | 'signup';
};

const SocialLoginButton: React.FC<ButtonType> = ({ page }) => {
    const handleLogin = (provider: 'google' | 'github') => {
        if (provider === 'google') {
            console.log('Google');
        } else if (provider === 'github') {
            console.log('Github');
        }
    };

    const renderButton = () => {
        if (page === 'login') {
            return (
                <div className={css.socialLogin}>
                    <div className={css.google} onClick={() => handleLogin('google')}>
                        <FcGoogle className={css.socialIcon} /> Google로 로그인
                    </div>
                    <div className={css.github} onClick={() => handleLogin('github')}>
                        <AiFillGithub className={css.socialIcon} /> Github로 로그인
                    </div>
                </div>
            );
        } else if (page === 'signup') {
            return (
                <div className={css.socialLogin} id={signSt.signSocialLogin}>
                    <div className={css.google} id={signSt.signSocial} onClick={() => handleLogin('google')}>
                        <span className={signSt.socialIcon}><FaGoogle /></span> Google로 로그인
                    </div>
                    <div className={css.github} id={signSt.signSocial} onClick={() => handleLogin('github')}>
                        <span className={signSt.socialIcon}><AiFillGithub /></span> Github로 로그인
                    </div>
                </div>
            );
        }
        return null;
    };

    return (
        <div>
            {renderButton()}
        </div>
    );
};

export default SocialLoginButton;