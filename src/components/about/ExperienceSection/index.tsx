import style from './styles.module.css';

export default function ExperienceSection() {
    return (
        <>
            <section className={`${style.experience_section} section_inner about_section`}>
                <h2 className={'about_secTitle'}>Experience</h2>
                <div className={style.ex_wrapper}>
                    <div className={style.ex_item}>
                        <h3 className={style.item_title}>Education</h3>
                        <ul>
                            <li>2024. 10. 그린아카데미 퍼블리셔 양성 교육</li>
                            <li>2025. 12. 코드캠프 프론트엔드 과정 온라인 교육</li>
                        </ul>
                    </div>
                    <div className={style.ex_item}>
                        <h3 className={style.item_title}>Work</h3>
                        <ul>
                            <li>2025. 06. 선영디자인 개발팀 퍼블리셔</li>
                            <li>2024. 08. 영산대학교 호텔경영전공 졸업</li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
}
