import Image from 'next/image';
import style from './styles.module.css';

export default function ProjectsCard({ thumbnail, techStack, title, summary }) {
    return (
        <>
            <div className={style.card}>
                <div className={style.thumbnail}>
                    <Image src={thumbnail} alt={title} fill className={style.thumbnailImg}></Image>
                </div>
                <div className={style.overlay}>
                    <div className={style.content}>
                        <ul className={style.tech_list}>
                            {techStack.slice(0, 3).map((el) => (
                                <li key={el} className={style.tech_item}>
                                    {el}
                                </li>
                            ))}
                        </ul>
                        <div className={style.title}>{title}</div>
                        <div className={style.summary}>{summary}</div>
                    </div>
                </div>
            </div>
        </>
    );
}
