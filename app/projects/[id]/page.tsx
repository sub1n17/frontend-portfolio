'use client';
import { personalProjects } from '@/src/data/personalProjects';
import style from './styles.module.css';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { ChevronLeft, Github, MoveLeft, MoveRight, MoveUpRight } from 'lucide-react';
import Image from 'next/image';

export default function ProjectDetailPage() {
    const params = useParams();
    const project = personalProjects.find((el) => el.id === params.id);

    const currentIndex = personalProjects.findIndex((el) => el.id === params.id);
    const prevProject = currentIndex > 0 ? personalProjects[currentIndex - 1] : null;
    const nextProject =
        personalProjects.length - 1 > currentIndex ? personalProjects[currentIndex + 1] : null;

    return (
        <>
            <main className={style.detail_main}>
                <div className={`${style.project_detail} main_inner`}>
                    <Link href={'/projects'} className={style.back}>
                        <ChevronLeft />
                        <span>목록으로</span>
                    </Link>
                    <header className={style.detail_hero}>
                        <div className={style.thumbnail_wrapper}>
                            {project?.demo ? (
                                <video src={project?.demo} controls autoPlay muted></video>
                            ) : (
                                <Image
                                    src={project?.thumbnail ?? ''}
                                    alt={project?.title ?? ''}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 1150px"
                                ></Image>
                            )}
                        </div>

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
                                <h2 className={style.content_title}>Project Overview</h2>
                                <p>{project?.overview}</p>
                            </div>
                            <div className={style.feature_wrapper}>
                                <h2 className={style.content_title}>Key Features</h2>
                                <ul>
                                    {project?.features.map((el) => (
                                        <li key={el.title}>
                                            <span>{el.title}</span>
                                            <ul>
                                                {el.desc.map((el) => (
                                                    <li key={el}>{el}</li>
                                                ))}
                                            </ul>
                                            {el.title === '디바이스 권한 제어' &&
                                                project?.featureDemo && (
                                                    <div className={style.feature_demo}>
                                                        <video
                                                            src={project.featureDemo}
                                                            autoPlay
                                                            muted
                                                            loop
                                                            playsInline
                                                        />
                                                    </div>
                                                )}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className={style.content_side}>
                            <div>
                                <h2 className={style.content_title}>Tech Stack</h2>
                                <div>
                                    <ul className={style.tech_wrapper}>
                                        {project?.skills.map((el) => (
                                            <li key={el.type}>
                                                <span className={style.type}>{el.type}</span>
                                                <ul>
                                                    {el.skill.map((el) => (
                                                        <li className={style.skills} key={el}>
                                                            {el}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div>
                                <h2 className={style.content_title}>Links</h2>
                                <div className={style.links}>
                                    <Link
                                        href={project?.links.github ?? ''}
                                        className={style.btn_link}
                                        target="_blank"
                                    >
                                        <span>Github</span>
                                        <Github className={style.icon} />
                                    </Link>
                                    <Link
                                        href={project?.links.demo ?? ''}
                                        className={style.btn_link}
                                        target="_blank"
                                    >
                                        <span>Live Demo</span>
                                        <MoveUpRight className={style.icon} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className={style.project_nav}>
                        {prevProject && (
                            <div className={`${style.nav_wrapper} ${style.prev}`}>
                                <Link href={`/projects/${prevProject.id}`}>
                                    <div className={style.label}>
                                        <MoveLeft />
                                        <span>Prev Project</span>
                                    </div>
                                    <div className={style.next_title}>{prevProject.title}</div>
                                </Link>
                            </div>
                        )}
                        {nextProject && (
                            <div className={`${style.nav_wrapper} ${style.next}`}>
                                <Link href={`/projects/${nextProject.id}`}>
                                    <div className={style.label}>
                                        <span>Next Project</span>
                                        <MoveRight />
                                    </div>
                                    <div className={style.next_title}>{nextProject.title}</div>
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </main>
        </>
    );
}
