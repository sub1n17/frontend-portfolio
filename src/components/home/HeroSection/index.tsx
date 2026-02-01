import Image from 'next/image';
import style from './styles.module.css';

export default function HeroSection() {
    return (
        <>
            <section className={style.hero}>
                <div className={`${style.hero_inner} section_inner`}>
                    <div className={style.txt_wrapper}>
                        <div className={style.title_wrapper}>
                            <div className={style.title}>
                                <div>USER</div>
                                <div>FIRST</div>
                                <div>FRONTEND</div>
                            </div>
                            <div className={style.summary}>
                                보이는 것보다, 사용되는 경험을 만드는 프론트엔드 개발자,
                                최수빈입니다
                            </div>
                            <div className={`${style.folder1} ${style.folder}`}>
                                <Image
                                    src={'/images/hero_folder.png'}
                                    alt="폴더"
                                    width={96}
                                    height={96}
                                ></Image>
                                <div className={style.folder_txt}>PROBLEM SOLVING</div>
                            </div>
                            <div className={`${style.folder2} ${style.folder}`}>
                                <Image
                                    src={'/images/hero_folder.png'}
                                    alt="폴더"
                                    width={96}
                                    height={96}
                                ></Image>
                                <div className={style.folder_txt}>USER FOCUS</div>
                            </div>
                            <div className={`${style.folder3} ${style.folder}`}>
                                <Image
                                    src={'/images/hero_folder.png'}
                                    alt="폴더"
                                    width={96}
                                    height={96}
                                ></Image>
                                <div className={style.folder_txt}>COMMUNICATION</div>
                            </div>
                            <div className={`${style.folder4} ${style.folder}`}>
                                <Image
                                    src={'/images/hero_folder.png'}
                                    alt="폴더"
                                    width={96}
                                    height={96}
                                ></Image>
                                <div className={style.folder_txt}>STEP BY STEP</div>
                            </div>
                            <div className={`${style.folder5} ${style.folder}`}>
                                <Image
                                    src={'/images/hero_folder.png'}
                                    alt="폴더"
                                    width={96}
                                    height={96}
                                ></Image>
                                <div className={style.folder_txt}>IMPROVEMENT</div>
                            </div>
                            <div className={`${style.folder6} ${style.folder}`}>
                                <Image
                                    src={'/images/hero_folder.png'}
                                    alt="폴더"
                                    width={96}
                                    height={96}
                                ></Image>
                                <div className={style.folder_txt}>BETTER EXPERIENCE</div>
                            </div>
                            <div className={`${style.folder7} ${style.folder}`}>
                                <Image
                                    src={'/images/hero_folder.png'}
                                    alt="폴더"
                                    width={96}
                                    height={96}
                                ></Image>
                                <div className={style.folder_txt}>LEARNING</div>
                            </div>
                            <div className={`${style.folder8} ${style.folder}`}>
                                <Image
                                    src={'/images/hero_folder.png'}
                                    alt="폴더"
                                    width={96}
                                    height={96}
                                ></Image>
                                <div className={style.folder_txt}>PERFORMANCE</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
