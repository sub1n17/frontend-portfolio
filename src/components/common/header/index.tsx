'use client';

import Image from 'next/image';
import style from './styles.module.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Header() {
    const pathname = usePathname();

    // 햄버거 버튼 클릭
    const [isOpen, setIsOpen] = useState(false);
    const onClickToggle = () => {
        setIsOpen((prev) => !prev);
    };

    // 햄버거 메뉴 열렸을 때 스크롤 방지
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            document.documentElement.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
            document.documentElement.style.overflow = '';
        }
        // 클린업
        return () => {
            document.body.style.overflow = '';
            document.documentElement.style.overflow = '';
        };
    }, [isOpen]);

    return (
        <>
            <header className={style.header}>
                <div className={style.header_inner}>
                    <h1>
                        <Link href={'/'}>
                            <Image
                                src={'/images/subinLogo.svg'}
                                alt="로고"
                                width={33}
                                height={28}
                                className={style.logo}
                            ></Image>
                        </Link>
                    </h1>

                    {/* pc 네비 */}
                    <nav className={style.menu}>
                        <ul>
                            <li>
                                <Link
                                    href="/projects"
                                    className={pathname.startsWith('/projects') ? style.active : ''}
                                >
                                    Projects
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/about"
                                    className={pathname === '/about' ? style.active : ''}
                                >
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link href={'https://github.com/sub1n17'} target="_blank">
                                    Github
                                </Link>
                            </li>
                        </ul>
                    </nav>

                    <div className={style.mob_menu}>
                        <button
                            className={`${style.hamburger_btn} ${isOpen ? style.open : ''}`}
                            onClick={onClickToggle}
                        >
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>

                    <nav className={`${style.mobile_nav} ${isOpen ? style.show : ''}`}>
                        <ul>
                            <li>
                                <Link href="/projects" onClick={onClickToggle}>
                                    Projects
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" onClick={onClickToggle}>
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="https://github.com/sub1n17"
                                    target="_blank"
                                    onClick={onClickToggle}
                                >
                                    Github
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    );
}
