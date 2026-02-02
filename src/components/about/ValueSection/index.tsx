import style from './styles.module.css';

export default function ValueSection() {
    return (
        <>
            <section className={`${style.hero_section} section_inner about_section`}>
                <h2 className={'about_secTitle'}>Values</h2>
                <div>
                    단순히 화면을 구현하는 것보다 데이터 흐름과 상태 변화를 이해하는 개발을
                    지향합니다. <br />
                    프론트엔드 개발자로서, 작은 디테일이 사용자 경험을 더욱 풍부하게 만들고
                    자연스러운 소통을 이끌어낸다고 생각합니다. <br />
                    화면의 섬세한 요소와 직관적인 상호작용을 통해, 더 많은 사람들이 편리하게 사용할
                    수 있는 서비스를 개발하고자 합니다.
                </div>
            </section>
        </>
    );
}
