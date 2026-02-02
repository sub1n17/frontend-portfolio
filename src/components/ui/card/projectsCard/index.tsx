import Image from 'next/image';
import style from './styles.module.css';

export default function ProjectsCard({ thumbnail, techStack, title, summary, role, tabActive }) {
    const techCount = tabActive === 'personal' ? 3 : 4;
    return (
        <>
            <div className={style.card}>
                <div className={style.thumbnail}>
                    <Image src={thumbnail} alt={title} fill className={style.thumbnailImg}></Image>
                </div>
                <div className={style.overlay}>
                    <div className={style.content}>
                        <ul className={style.tech_list}>
                            {techStack.slice(0, techCount).map((el: string) => (
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
