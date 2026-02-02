import { Mail, Phone } from 'lucide-react';
import style from './styles.module.css';

export default function ContactSection() {
    return (
        <>
            <section className={`${style.contact_section} section_inner`}>
                <h2 className={'about_secTitle'}>Contact</h2>
                <div className={style.contact_wrapper}>
                    <div className={style.contact_item}>
                        <Mail />
                        <span>xxx@naver.com</span>
                    </div>
                    <div className={style.contact_item}>
                        <Phone />
                        <span>010-xxxx-xxxx</span>
                    </div>
                </div>
            </section>
        </>
    );
}
