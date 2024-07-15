import Link from 'next/link';

import loginSt from "../login/login.module.css"
import signSt from "./signup.module.css"

import LoginFooter from '../components/LoginFooter';
import SocialLoginButton from '../components/SocialLoginButton';

export default function SignUp() {
  return (
    <>
      <title>가입하기 • Buungstagram</title>

      <div className={loginSt.page}>
        <div className={loginSt.container}>

          <div className={loginSt.login}>

            <div className={loginSt.loginCon} id={signSt.signLoginCon}>

              <div className={loginSt.logo} id={signSt.signLogo} />

              <p className={signSt.sentence}>세명컴고 세붕이들의 작품을 보려면 가입하세요.</p>

              <SocialLoginButton page="signup" />

              {/* <div className={loginSt.socialLogin} id={signSt.signSocialLogin}>
                <div className={loginSt.google} id={signSt.signSocial}><span className={signSt.socialIcon}><FaGoogle /></span> Google로 로그인</div>
                <div className={loginSt.github} id={signSt.signSocial}><span className={signSt.socialIcon}><AiFillGithub /></span> Github로 로그인</div>
              </div> */}

              <div className={loginSt.orLine} id={signSt.orLine}>
                <div className={loginSt.or}>또는</div>
                <div className={loginSt.line} />
              </div>

              <div className={loginSt.IdAndPw}>
                <input type="text" className={loginSt.Id} placeholder='휴대폰 번호 또는 이메일 주소' />
                <input type="text" className={loginSt.userName} placeholder='사용자 이름' />
                <input type="password" className={loginSt.Pw} placeholder='비밀번호' />
                <input type="password" className={loginSt.PwChk} placeholder='비밀번호 확인' />
              </div>

              <p className={signSt.policy}>사용자는 붕스타그램에 로그인함으로써, <Link href={"/policy"}>이용약관</Link> 및 <Link href={"/policy"}>개인정보처리방침</Link>에 동의하는 것으로 간주됩니다.</p>

              <button className={loginSt.submit} id={signSt.submit}>가입</button>
            </div>

            <div className={loginSt.signCon}>
              <div className={loginSt.sign}>
                <span>계정이 있으신가요?</span> <Link href="/login">로그인</Link>
              </div>
            </div>

            <div className={loginSt.appCon}>
              <p>앱을 다운로드하세요.</p>

              <div className={loginSt.appWrap}>
                <div className={loginSt.store} />
                <div className={loginSt.ms} />
              </div>
            </div>

          </div>
        </div>

        <LoginFooter />
      </div >
    </>
  );
}
