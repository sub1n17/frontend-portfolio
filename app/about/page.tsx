import AboutPage from '@/src/components/about';
import style from './styles.module.css';

export default function About() {
    return (
        <>
            <main className={style.about_container}>
                <AboutPage></AboutPage>
                {/* <section className={style.about_hero}>
                    <h1 className={style.title}>
                        Designing Better <br /> <span>User Experience</span>
                    </h1>
                    <p className={style.description}>
                        보이는 것 너머, 사용자가 머무는 순간을 설계하는 퍼블리셔 최수빈입니다.
                    </p>
                </section>

                <div className={style.about_content_grid}>
                    <section className={style.about_section}>
                        <h2 className={style.section_title}>Experience</h2>
                        <ul className={style.timeline_list}>
                            <li>
                                <span className={style.date}>2024 _ Present</span>
                                <p className={style.text}>프리랜서 퍼블리셔 / 프론트엔드 개발</p>
                            </li>
                            <li>
                                <span className={style.date}>2023 _ 2024</span>
                                <p className={style.text}>OOO 에이전시 웹 퍼블리싱 담당</p>
                            </li>
                        </ul>

                        <h2 className={style.section_title}>Connect</h2>
                        <div className={style.contact_links}>
                            <a href="#" className={style.link}>
                                Email <span className={style.arrow}>↗</span>
                            </a>
                            <a href="#" className={style.link}>
                                LinkedIn <span className={style.arrow}>↗</span>
                            </a>
                        </div>
                    </section>

                    <section className={style.about_section}>
                        <div className={style.code_card}>
                            <div className={style.card_header}>
                                <span className={style.dot}></span>
                                <span className={style.dot}></span>
                                <span className={style.dot}></span>
                            </div>
                            <div className={style.card_content}>
                                <h3 className={style.skill_group_title}>Core Skills</h3>
                                <div className={style.tag_container}>
                                    <span className={style.tag}>HTML5</span>
                                    <span className={style.tag}>CSS3</span>
                                    <span className={style.tag}>JavaScript</span>
                                    <span className={style.tag}>React</span>
                                </div>

                                <h3 className={style.skill_group_title}>Values</h3>
                                <p className={style.value_text}>
                                    {' '}
                                    접근성과 성능 최적화를 최우선으로 합니다.
                                </p>
                                <p className={style.value_text}>
                                    {' '}
                                    협업하기 좋은 클린 코드를 지향합니다.
                                </p>
                            </div>
                        </div>
                    </section>
                </div> */}
            </main>
        </>
    );
}
