import Link from 'next/link';

import { GoHomeFill } from "react-icons/go";
import { FiPlusSquare, FiSend } from "react-icons/fi";
import { TbMessageCircleQuestion } from "react-icons/tb";
import { PiSignIn } from "react-icons/pi";

import styles from "../styles/header.module.css";

export default function Header() {
    return (
        <header className={styles.header}>

            <div className={styles.headerWrap}>

                <div className={styles.logo} >
                    <div className={styles.logoImg} />
                </div>

                <div className={styles.nav}>
                    <ul className={styles.ul}>
                        <Link href="/"><span className={styles.icon}><GoHomeFill /></span> <span className={styles.txt}>홈</span></Link>
                        <Link href="/upload"><span className={styles.icon}><FiPlusSquare /></span> <span className={styles.txt}>업로드</span></Link>
                        <Link href="/chat"><span className={styles.icon}><FiSend /></span> <span className={styles.txt}>채팅</span></Link>
                        <Link href="/qna"><span className={styles.icon}><TbMessageCircleQuestion /></span> <span className={styles.txt}>질문</span></Link>
                        <Link href="/profile"><span className={styles.icon}>ㅁ</span> <span className={styles.txt}>프로필</span></Link>

                        <div className={styles.line} />
                        <Link href="/login"><span className={styles.icon}><PiSignIn /></span> <span className={styles.txt}>로그인</span></Link>
                    </ul>
                </div >

            </div>
        </header>
    );
}
