"use client";

import Link from 'next/link';

import { GoHomeFill } from "react-icons/go";
import { FiPlusSquare, FiSend } from "react-icons/fi";
import { TbMessageCircleQuestion } from "react-icons/tb";
import { PiSignIn, PiSignOut } from "react-icons/pi";

import styles from "../styles/header.module.css";

import { auth } from '../../../firebase/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

export default function Header() {
    const [isUser, setIsUser] = useState<boolean | null>(null);

    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setIsUser(!!user);
        });

        return () => unsubscribe();
    }, [pathname, searchParams]);

    const handleLogout = async () => {
        if (confirm("정말로 로그아웃하시겠습니까?")) {
            try {
                await signOut(auth);
            } catch (error) {
                alert(`로그아웃 실패. ${error}`);
                console.error("로그아웃 실패: ", error);
            }
        }
    };

    return (
        <header className={styles.header}>
            <div className={styles.headerWrap}>
                <div className={styles.logo}>
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
                        {isUser !== null && (
                            <Link href={isUser ? "#" : "/login"} onClick={isUser ? handleLogout : undefined}>
                                <span className={styles.icon}>
                                    {isUser ? <PiSignOut /> : <PiSignIn />}
                                </span>
                                <span className={styles.txt}>
                                    {isUser ? "로그아웃" : "로그인"}
                                </span>
                            </Link>
                        )}
                    </ul>
                </div>
            </div>
        </header>
    );
}
