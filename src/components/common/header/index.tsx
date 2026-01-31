import Image from 'next/image';
import style from './styles.module.css';
import Link from 'next/link';

export default function Header() {
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
                                height={26}
                            ></Image>
                        </Link>
                    </h1>
                    <div className={style.header_right}>
                        <nav>
                            <ul className={style.menu}>
                                <li>
                                    <Link href="/projects">Projects</Link>
                                </li>
                                <li>
                                    <Link href="/about">About</Link>
                                </li>
                            </ul>
                        </nav>
                        <Link href={'/'} className={style.github}>
                            Github
                        </Link>
                    </div>
                </div>
            </header>
        </>
    );
}
