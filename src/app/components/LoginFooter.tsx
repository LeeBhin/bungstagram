import loginSt from "../login/login.module.css"

export default function LoginFooter() {
    return (
        <div className={loginSt.footer}>
            <ul className={loginSt.up}>
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
                <li>SMC Verified</li>
            </ul>

            <ul className={loginSt.down}>
                <li>
                    <section>
                        <select className={loginSt.drop} defaultValue={"ko"}>
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
    )
}