import Link from 'next/link';

import css from "./login.module.css"

import { FcGoogle } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";

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

                            <div className={css.socialLogin}>
                                <div className={css.google}><FcGoogle /> Google로 로그인</div>
                                <div className={css.github}><AiFillGithub /> Github로 로그인</div>
                            </div>

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

                <div className={css.footer}>
                    <ul className={css.up}>
                        <li>SMC</li>
                        <li>소개</li>
                        <li>블로그</li>
                        <li>채용 정보</li>
                        <li>도움말</li>
                        <li>API</li>
                        <li>개인정보처리방침</li>
                        <li>약관</li>
                        <li>위치</li>
                        <li>Buungstagram Lite</li>
                        <li>Threads</li>
                        <li>연락처 업로드 & 비사용자</li>
                        <li>Meta Verified</li>
                    </ul>

                    <ul className={css.down}>
                        <li>
                            <section>
                                <select className={css.drop} defaultValue={"ko"}>
                                    <option value="af">Afrikaans</option>
                                    <option value="ar">العربية</option>
                                    <option value="cs">Čeština</option>
                                    <option value="da">Dansk</option>
                                    <option value="de">Deutsch</option>
                                    <option value="el">Ελληνικά</option>
                                    <option value="en">English</option>
                                    <option value="en-gb">English (UK)</option>
                                    <option value="es">Español (España)</option>
                                    <option value="es-la">Español</option>
                                    <option value="fa">فارسی</option>
                                    <option value="fi">Suomi</option>
                                    <option value="fr">Français</option>
                                    <option value="he">עברית</option>
                                    <option value="id">Bahasa Indonesia</option>
                                    <option value="it">Italiano</option>
                                    <option value="ja">日本語</option>
                                    <option value="ko">한국어</option>
                                    <option value="ms">Bahasa Melayu</option>
                                    <option value="nb">Norsk</option>
                                    <option value="nl">Nederlands</option>
                                    <option value="pl">Polski</option>
                                    <option value="pt-br">Português (Brasil)</option>
                                    <option value="pt">Português (Portugal)</option>
                                    <option value="ru">Русский</option>
                                    <option value="sv">Svenska</option>
                                    <option value="th">ภาษาไทย</option>
                                    <option value="tl">Filipino</option>
                                    <option value="tr">Türkçe</option>
                                    <option value="zh-cn">中文(简体)</option>
                                    <option value="zh-tw">中文(台灣)</option>
                                    <option value="bn">বাংলা</option>
                                    <option value="gu">ગુજરાતી</option>
                                    <option value="hi">हिन्दी</option>
                                    <option value="hr">Hrvatski</option>
                                    <option value="hu">Magyar</option>
                                    <option value="kn">ಕನ್ನಡ</option>
                                    <option value="ml">മലയാളം</option>
                                    <option value="mr">मराठी</option>
                                    <option value="ne">नेपाली</option>
                                    <option value="pa">ਪੰਜਾਬੀ</option>
                                    <option value="si">සිංහල</option>
                                    <option value="sk">Slovenčina</option>
                                    <option value="ta">தமிழ்</option>
                                    <option value="te">తెలుగు</option>
                                    <option value="ur">اردو</option>
                                    <option value="vi">Tiếng Việt</option>
                                    <option value="zh-hk">中文(香港)</option>
                                    <option value="bg">Български</option>
                                    <option value="fr-ca">Français (Canada)</option>
                                    <option value="ro">Română</option>
                                    <option value="sr">Српски</option>
                                    <option value="uk">Українська</option>
                                </select>
                            </section>

                        </li>
                        <li>
                            © 2024 Buungstagram from SMC
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}
