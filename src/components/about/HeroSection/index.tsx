import Image from 'next/image';
import style from './styles.module.css';

export default function HeroSection() {
    return (
        <>
            <section className={`${style.hero_section} section_inner about_section`}>
                <div className={style.hero_wrapper}>
                    <div>
                        <div className={style.profileImg}>
                            {/* <Image src="/images/profile.jpeg" alt="프로필" fill></Image> */}
                            <Image src="/images/project_p4.png" alt="프로필" fill></Image>
                        </div>

                        <div>
                            <span>NAME</span> <span>최수빈</span>
                        </div>
                    </div>

                    <div className={style.bubble_wrapper}>
                        <h1>사용자 경험을 만드는 프론트엔드 개발자</h1>
                    </div>
                </div>
            </section>
        </>
    );
}
