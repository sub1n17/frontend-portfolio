'use client';

import Image from 'next/image';
import style from './styles.module.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
    const pathname = usePathname();

    return (
        <>
            <header className={style.header}>
                <div className={style.header_inner}>
                    <h1>
                        <Link href={'/'}>
                            <Image
                                src={'/images/subinLogo.png'}
                                alt="로고"
                                width={33}
                                height={28}
                                style={{ width: 'auto', height: 'auto' }}
                            ></Image>
                        </Link>
                    </h1>

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
                </div>
            </header>
        </>
    );
}
