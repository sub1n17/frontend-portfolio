'use client';
import { personalProjects } from '@/src/data/personalProjects';
import style from './styles.module.css';
import { useParams } from 'next/navigation';
import Image from 'next/image';

export default function ProjectDetailPage() {
    const params = useParams();
    const project = personalProjects.find((el) => el.id === params.id);

    return (
        <>
            <main className={`${style.project_detail} main_inner`}>
                <header className={style.detail_hero}>
                    {project?.thumbnail && (
                        <div className={style.thumbnail_wrapper}>
                            <Image src={project?.thumbnail} alt={project?.title} fill></Image>
                        </div>
                    )}
                    <div className={style.hero_info}>
                        <h1 className={style.detail_title}>{project?.title}</h1>
                        <div className={style.detail_meta}>
                            <span>
                                <strong>Period</strong> {project?.period}
                            </span>
                            <span>
                                <strong>Role</strong> {project?.role}
                            </span>
                        </div>
                    </div>
                </header>

                <section className={style.detail_content}>
                    <div className={style.content_main}>
                        <div className={style.overview_wrapper}>
                            <h2>Project Overview</h2>
                            <ul>
                                {project?.features.map((el) => (
                                    <li key={el}>{el}</li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h2>Key Features</h2>
                            <ul>
                                {project?.highlights.map((el) => (
                                    <li key={el}>{el}</li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <aside className={style.content_side}>
                        <h3>Tech Stack</h3>
                        <div className={style.tech_tags}>
                            {project?.techStack.map((el) => (
                                <span key={el} className={style.tech_tag}>
                                    {el}
                                </span>
                            ))}
                        </div>

                        <div className={style.links}>
                            <a href="#" className={style.btn_link}>
                                Github ↗
                            </a>
                            <a href="#" className={style.btn_link}>
                                Live Demo ↗
                            </a>
                        </div>
                    </aside>
                </section>

                <footer className={style.detail_footer}>
                    <button className={style.next_project}>
                        <span className={style.label}>Next Project</span>
                        <span className={style.next_title}>숙박권 거래 플랫폼 (Web)</span>
                    </button>
                </footer>
            </main>
        </>
    );
}
