'use client';
import { useState } from 'react';
import ProjectList from './ProjectList';
import ProjectTabs from './ProjectTabs';
import style from './styles.module.css';

export default function ProjectsPage() {
    const [tabActive, setTabActive] = useState('personal');

    return (
        <>
            <main className={style.project_main}>
                <div className={`${style.project_container} main_inner`}>
                    <header className={style.page_header}>
                        <h1 className={style.title}>My Projects</h1>
                        <div className={style.description}>
                            React, Next.js, TypeScript, JavaScript, React Native로 구현한 프로젝트
                        </div>
                        <ProjectTabs
                            tabActive={tabActive}
                            setTabActive={setTabActive}
                        ></ProjectTabs>
                    </header>
                    <section className={style.project_section}>
                        <ProjectList tabActive={tabActive}></ProjectList>
                    </section>
                </div>
            </main>
        </>
    );
}
