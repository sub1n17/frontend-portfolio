'use client';

import Link from 'next/link';
import style from './styles.module.css';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { useState } from 'react';

export default function Footer() {
    const [copyTxt, setCopyTxt] = useState(false);
    const onClickEmail = () => {
        navigator.clipboard.writeText('sub1n17@naver.com');
        setCopyTxt(true);
        setTimeout(() => {
            setCopyTxt(false);
        }, 1500);
    };

    return (
        <footer className={style.footer}>
            <div className={style.footer_inner}>
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
                            <Link
                                href={'https://github.com/sub1n17'}
                                target="_blank"
                                rel="noopener noreferrer"
                                data-text="Github"
                            >
                                Github
                            </Link>
                        </li>
                        <li className={style.email_wrapper}>
                            <button onClick={onClickEmail} className={style.email}>
                                <MailOutlineIcon />
                            </button>

                            <div className={`${style.copyTxt} ${copyTxt ? style.show : ''}`}>
                                Copied !
                            </div>
                        </li>
                    </ul>
                </nav>
                <p className={style.copyright}>© 2026 Choi Subin.</p>
            </div>
        </footer>
    );
}
