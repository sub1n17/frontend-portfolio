import Image from 'next/image';
import style from './styles.module.css';

export default function HeroSection() {
    return (
        <>
            <section className={`${style.hero_section} section_inner about_section`}>
                <div className={style.image_wrapper}>
                    <div className={style.profileImg}>
                        <Image src="/images/profile.jpeg" alt="프로필" fill sizes="440px"></Image>
                    </div>
                    <div className={style.reaction}>
                        <span>💻</span>
                        <span>🔥</span>
                        <span>👍</span>
                        <span>👩‍💻</span>
                        <div className={style.bubble_tail}></div>
                    </div>
                </div>

                <div className={style.text_wrapper}>
                    <span className={style.watermark}>ABOUT</span>
                    <h1 className={style.summary}>
                        USER <span className={style.point_txt}>FIRST</span>
                        <br />
                        FRONTEND
                        <br />
                        DEVELOPER
                    </h1>
                    <p className={style.sub}>
                        사용자의 일상이 편해지는 코드를 고민합니다.
                        <br />
                        논리적인 구조와 유연한 UI 사이의 균형을 찾는 개발자
                        <span className={style.highlight_wrapper}>
                            <span className={style.highlight}>
                                최수빈<span className={style.cursor}></span>
                            </span>
                            <span className={style.bubble}>대충은 못 참는 편 👀</span>
                        </span>
                        입니다.
                    </p>
                </div>
            </section>
        </>
    );
}
