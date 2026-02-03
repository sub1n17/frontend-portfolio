import style from './styles.module.css';

export default function ValueSection() {
    return (
        <>
            <section className={`${style.value_section} section_inner about_section`}>
                <div className={style.secTitle}>VALUES</div>
                <div className={style.value_wrapper}>
                    <div className={style.value_item}>
                        <span className={style.num}>01</span>
                        <h2 className={style.title}>User Focus</h2>
                        <p className={style.desc}>사용자의 시선에서 최적의 경험을 설계합니다.</p>
                    </div>
                    <div className={style.value_item}>
                        <span className={style.num}>02</span>
                        <h2 className={style.title}>Problem Solving</h2>
                        <p className={style.desc}>문제의 본질을 찾고 해결하는 과정을 즐깁니다.</p>
                    </div>
                    <div className={style.value_item}>
                        <span className={style.num}>03</span>
                        <h2 className={style.title}>Better Experience</h2>
                        <p className={style.desc}>더 나은 성능과 사용성을 위해 학습합니다.</p>
                    </div>
                </div>
            </section>
        </>
    );
}
