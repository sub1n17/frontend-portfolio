import Link from 'next/link';
import style from './styles.module.css';

export default function Footer() {
    return (
        <footer className={style.footer}>
            <div className={style.footer_inner}>
                <div className={style.footer_content}>
                    <Link className={style.email} href={'mailto:subin17@naver.com'}>
                        sub1n17@naver.com
                    </Link>
                    <nav className={style.footer_nav}>
                        <ul>
                            <li>
                                <Link href={'/projects'} data-text="Projects">
                                    Projects
                                </Link>
                            </li>
                            <li>
                                <Link href={'/about'} data-text="About">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link href={'https://github.com/sub1n17'} data-text="Github">
                                    Github
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <p className={style.copyright}>© 2026 Choi Subin.</p>
            </div>
        </footer>
    );
}
