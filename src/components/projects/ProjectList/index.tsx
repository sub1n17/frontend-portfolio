import { personalProjects } from '@/src/data/personalProjects';
import ProjectsCard from '../../ui/card/projectsCard';
import Link from 'next/link';
import style from './styles.module.css';
import { companyProjects } from '@/src/data/companyProjects';

interface ProjectListProps {
    tabActive: 'personal' | 'company';
}

export default function ProjectList({ tabActive }: ProjectListProps) {
    return (
        <>
            <div className={style.project_list}>
                {tabActive === 'personal'
                    ? personalProjects.map((el) => (
                          <Link href={`/projects/${el.id}`} key={el.id}>
                              <ProjectsCard
                                  thumbnail={el.thumbnail}
                                  objectPosition={el.objectPosition}
                                  cardSkills={el.cardSkills}
                                  skills={el.skills}
                                  title={el.title}
                                  summary={el.summary}
                                  role={el.role}
                                  tabActive={tabActive}
                              ></ProjectsCard>
                          </Link>
                      ))
                    : companyProjects.map((el) => (
                          <a href={el.link} target="_blank" key={el.id}>
                              <ProjectsCard
                                  thumbnail={el.thumbnail}
                                  objectPosition={el.objectPosition}
                                  skills={el.skills}
                                  title={el.title}
                                  summary={el.summary}
                                  role={el.role}
                                  tabActive={tabActive}
                              ></ProjectsCard>
                          </a>
                      ))}
            </div>
        </>
    );
}
