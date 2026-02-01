import { personalProjects } from '@/src/data/personalProjects';
import ProjectsCard from '../../ui/card/projectsCard';
import Link from 'next/link';
import style from './styles.module.css';

export default function ProjectList() {
    return (
        <>
            <div className={style.project_list}>
                {personalProjects.map((el) => (
                    <Link href={`/projects/${el.id}`} key={el.id}>
                        <ProjectsCard
                            thumbnail={el.thumbnail}
                            techStack={el.techStack}
                            title={el.title}
                            summary={el.summary}
                        ></ProjectsCard>
                    </Link>
                ))}
            </div>
        </>
    );
}
