import Link from 'next/link';

import css from "./login.module.css"

import LoginFooter from '../components/LoginFooter';
import SocialLoginButton from '../components/SocialLoginButton';

export default function Login() {
    return (
        <>
            <title>로그인 • Buungstagram</title>

            <div className={css.page}>
                <div className={css.container}>

                    <div className={css.phone}></div>

                    <div className={css.login}>

                        <div className={css.loginCon}>

                            <div className={css.logo} />

                            <div className={css.IdAndPw}>
                                <input type="text" className={css.Id} placeholder='전화번호 또는 이메일' />
                                <input type="password" className={css.Pw} placeholder='비밀번호' />
                            </div>

                            <button className={css.submit}>로그인</button>

                            <div className={css.orLine}>
                                <div className={css.or}>또는</div>
                                <div className={css.line} />
                            </div>

                            <SocialLoginButton page="login" />

                            {/* <div className={css.socialLogin}>
                                <div className={css.google}><FcGoogle /> Google로 로그인</div>
                                <div className={css.github}><AiFillGithub /> Github로 로그인</div>
                            </div> */}

                            <div className={css.forgot}>비밀번호를 잊으셨나요?</div>

                        </div>

                        <div className={css.signCon}>
                            <div className={css.sign}>
                                <span>계정이 없으신가요?</span> <Link href="/signup">가입하기</Link>
                            </div>
                        </div>

                        <div className={css.appCon}>
                            <p>앱을 다운로드하세요.</p>

                            <div className={css.appWrap}>
                                <div className={css.store} />
                                <div className={css.ms} />
                            </div>
                        </div>

                    </div>
                </div>

                <LoginFooter />
            </div>
        </>
    );
}
