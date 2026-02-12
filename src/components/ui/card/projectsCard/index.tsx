import Image from 'next/image';
import style from './styles.module.css';

interface ProjectsCardProps {
    thumbnail: string;
    cardSkills: string[];
    skills: {
        type: string;
        skill: string[];
    }[];
    title: string;
    summary?: string;
    role?: string;
    tabActive: string;
}

export default function ProjectsCard({
    thumbnail,
    cardSkills,
    skills,
    title,
    summary,
    role,
    tabActive,
}: ProjectsCardProps) {
    const isPersonal = tabActive === 'personal';
    const techCount = isPersonal ? 3 : 4;
    return (
        <>
            <div className={style.card}>
                <div className={style.thumbnail}>
                    <Image
                        src={thumbnail}
                        alt={title}
                        fill
                        className={`${style.thumbnailImg} ${
                            title.includes('장소 공유') ? style.thumbLeft : ''
                        }`}
                    ></Image>
                </div>
                <div className={style.overlay}>
                    <div className={style.content}>
                        <ul className={style.tech_list}>
                            {isPersonal
                                ? // 개인 프로젝트
                                  cardSkills.map((el: string) => (
                                      <li key={el} className={style.tech_item}>
                                          {el}
                                      </li>
                                  ))
                                : // 회사 프로젝트
                                  skills
                                      .find((el) => el.type === 'Skills')
                                      ?.skill.slice(0, techCount)
                                      .map((el: string) => (
                                          <li key={el} className={style.tech_item}>
                                              {el}
                                          </li>
                                      ))}
                        </ul>
                        <div className={style.title}>{title}</div>
                        {!role && <div className={style.summary}>{summary}</div>}
                        {role && <div className={style.role}>{role}</div>}
                    </div>
                </div>
            </div>
        </>
    );
}
