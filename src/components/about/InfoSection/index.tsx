import Image from 'next/image';
import style from './styles.module.css';

export default function InfoSection() {
    return (
        <>
            <section className={`${style.info_section} section_inner about_section`}>
                <div className={style.info_item}>
                    <div className={style.label}>Experience</div>
                    <div className={style.exp_content}>
                        <div>
                            <span className={style.period}>2025.07 - 2025.12</span> 코드캠프
                            프론트엔드 과정 온라인 교육
                        </div>
                        <div>
                            <span className={style.period}>2023.05 - 2024.10</span> 그린아카데미
                            퍼블리셔 양성 교육
                        </div>
                    </div>
                </div>
                <div className={style.info_item}>
                    <div className={style.label}>Skills</div>
                    <div className={`${style.content} ${style.skill_wrapper}`}>
                        <div className={style.skill_row}>
                            <div className={style.skill_item}>
                                <Image
                                    src={'/icons/Next.js.svg'}
                                    alt="Next.js"
                                    width={32}
                                    height={32}
                                ></Image>
                                <p>Next.js</p>
                            </div>
                            <div className={style.skill_item}>
                                <Image
                                    src={'/icons/React.svg'}
                                    alt="React"
                                    width={32}
                                    height={32}
                                ></Image>
                                <p>React</p>
                            </div>
                            <div className={style.skill_item}>
                                <Image
                                    src={'/icons/TypeScript.svg'}
                                    alt="TypeScript"
                                    width={32}
                                    height={32}
                                ></Image>
                                <p>TypeScript</p>
                            </div>
                            <div className={style.skill_item}>
                                <Image
                                    src={'/icons/GraphQL.svg'}
                                    alt="GraphQL"
                                    width={32}
                                    height={32}
                                ></Image>
                                <p>GraphQL</p>
                            </div>
                        </div>
                        <div className={style.skill_row}>
                            <div className={style.skill_item}>
                                <Image
                                    src={'/icons/HTML5.svg'}
                                    alt="HTML5"
                                    width={32}
                                    height={32}
                                ></Image>
                                <p>HTML5</p>
                            </div>
                            <div className={style.skill_item}>
                                <Image
                                    src={'/icons/CSS3.svg'}
                                    alt="CSS3"
                                    width={32}
                                    height={32}
                                ></Image>
                                <p>CSS3</p>
                            </div>
                            <div className={style.skill_item}>
                                <Image
                                    src={'/icons/JavaScript.svg'}
                                    alt="JavaScript"
                                    width={32}
                                    height={32}
                                ></Image>
                                <p>JavaScript</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
