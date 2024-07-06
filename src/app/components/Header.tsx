import Link from 'next/link';

import { GoHomeFill } from "react-icons/go";

export default function Header() {
    return (
        <header>
            <nav>
                <ul>
                    <li><Link href="/">홈</Link></li>
                    <li><Link href="/profile">프로필</Link></li>
                    <li><Link href="/upload">업로드</Link></li>
                    <li><Link href="/chat">채팅</Link></li>
                </ul>
            </nav>
        </header>
    );
}
