import { Github, Mail, Phone } from 'lucide-react';
import style from './styles.module.css';
import Link from 'next/link';

export default function ContactSection() {
    return (
        <>
            <section className={`${style.contact_section} section_inner`}>
                <div className={style.label}>contact</div>
                <div className={style.contact_wrapper}>
                    <Link href={'mailto:sub1n17@naver.com'} className={style.contact_item}>
                        <Mail className={style.icon} />
                        <span>sub1n17@naver.com</span>
                    </Link>
                    <Link href="tel:01027779353" className={style.contact_item}>
                        <Phone className={style.icon} />
                        <span>010-2777-9353</span>
                    </Link>
                    <Link
                        href="https://github.com/sub1n17"
                        target="_blank"
                        className={style.contact_item}
                    >
                        <Github className={style.icon} />
                        <span>GitHub</span>
                    </Link>
                </div>
            </section>
        </>
    );
}
