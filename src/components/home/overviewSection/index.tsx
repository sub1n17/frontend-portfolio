'use client';

import style from './styles.module.css';
import FolderOpenOutlinedIcon from '@mui/icons-material/FolderOpenOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import HomeCard from '../../ui/card/homeCard';

export default function OverViewSection() {
    return (
        <>
            <section className={style.overview_section}>
                <div className={'section_inner'}>
                    <div className={style.title}>WHAT I DO</div>
                    <div className={style.description}>
                        개인 프로젝트를 통해 <br />
                        웹 서비스에서 자주 사용되는 핵심 기능들을 직접 구현하고 정리했습니다.
                        <br /> <br />
                        <span className={style.highlight}>Project</span> 에서는 구현한 주요 기능과
                        기술 스택을, <br />
                        <span className={style.highlight}>About</span>에서는 경험과 기술,
                        프론트엔드로서의 방향성을 소개합니다.
                    </div>
                    <div className={style.flex_wrapper}>
                        <div className={`${style.project_wrapper} ${style.box}`}>
                            <HomeCard
                                Icon={FolderOpenOutlinedIcon}
                                title="Project"
                                description="웹 서비스의 핵심 기능을 구현한 프로젝트 모음"
                                href="/projects"
                                color="#9BA3EB"
                                btnText="View Projects"
                            ></HomeCard>
                        </div>
                        <div className={`${style.about_wrapper} ${style.box}`}>
                            <HomeCard
                                Icon={PersonOutlineOutlinedIcon}
                                title="About"
                                description="경험과 기술 스택, 프론트엔드로서의 방향성"
                                href="/about"
                                color="#B2B9F5"
                                btnText="About Me"
                            ></HomeCard>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
