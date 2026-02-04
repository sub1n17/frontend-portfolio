'use client';

import style from './styles.module.css';
import HomeCard from '../../ui/card/homeCard';
import { Mic, Search } from 'lucide-react';
import Image from 'next/image';

export default function OverViewSection() {
    return (
        <>
            <section className={style.overview_section}>
                <div className={`${style.overview_inner} section_inner`}>
                    <div className={style.title}>WHAT I DO</div>
                    <div className={style.search_wrapper}>
                        <div className={style.search_inner}>
                            <Search />
                            <div className={style.searchBar}>
                                <span className={style.search_txt}>Search for my skills...</span>
                                <span className={style.cursor}>|</span>
                            </div>
                            <Mic />
                        </div>
                    </div>
                    <div className={style.card_wrapper}>
                        <div className={`${style.card_item} ${style.project}`}>
                            <HomeCard
                                title="Project"
                                description="웹 서비스에서 자주 사용되는 핵심 기능들을 직접 구현한 개인 프로젝트 모음"
                                href="/projects"
                                image={'/images/home_laptop.png'}
                            ></HomeCard>

                            <Image
                                src={'/images/project_gear.png'}
                                alt="설정"
                                width={300}
                                height={300}
                                className={`${style.hoverImg} ${style.hover1}`}
                            ></Image>
                            <Image
                                src={'/images/project_puzzle.png'}
                                alt="퍼즐"
                                width={300}
                                height={300}
                                className={`${style.hoverImg} ${style.hover2}`}
                            ></Image>
                            <Image
                                src={'/images/project_fire.png'}
                                alt="불"
                                width={300}
                                height={300}
                                className={`${style.hoverImg} ${style.hover3}`}
                            ></Image>
                            <Image
                                src={'/images/project_mobile.png'}
                                alt="모바일"
                                width={300}
                                height={300}
                                className={`${style.hoverImg} ${style.hover4}`}
                            ></Image>
                            <Image
                                src={'/images/project_mouse.png'}
                                alt="마우스"
                                width={300}
                                height={300}
                                className={`${style.hoverImg} ${style.hover5}`}
                            ></Image>
                            <Image
                                src={'/images/project_globe.png'}
                                alt="글로벌"
                                width={300}
                                height={300}
                                className={`${style.hoverImg} ${style.hover6}`}
                            ></Image>
                        </div>
                        <div className={`${style.card_item} ${style.about}`}>
                            <HomeCard
                                title="About"
                                description="프론트엔드 개발자로서의 방향성, 경험, 기술 스택을 정리한 소개 페이지"
                                href="/about"
                                image={'/images/home_light.png'}
                            ></HomeCard>
                            <Image
                                src={'/images/about_seedling.png'}
                                alt="새싹"
                                width={300}
                                height={300}
                                className={`${style.hoverImg} ${style.hover1}`}
                            ></Image>
                            <Image
                                src={'/images/about_glass.png'}
                                alt="돋보기"
                                width={300}
                                height={300}
                                className={`${style.hoverImg} ${style.hover2}`}
                            ></Image>
                            <Image
                                src={'/images/about_working.png'}
                                alt="일"
                                width={300}
                                height={300}
                                className={`${style.hoverImg} ${style.hover3}`}
                            ></Image>
                            <Image
                                src={'/images/about_bullet.png'}
                                alt="목표"
                                width={300}
                                height={300}
                                className={`${style.hoverImg} ${style.hover4}`}
                            ></Image>

                            <Image
                                src={'/images/about_memo.png'}
                                alt="메모"
                                width={300}
                                height={300}
                                className={`${style.hoverImg} ${style.hover5}`}
                            ></Image>
                            <Image
                                src={'/images/about_sparkle.png'}
                                alt="빛"
                                width={300}
                                height={300}
                                className={`${style.hoverImg} ${style.hover6}`}
                            ></Image>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
