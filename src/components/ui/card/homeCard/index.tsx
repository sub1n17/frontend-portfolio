'use client';

import Link from 'next/link';
import style from './styles.module.css';
import { ICardProps } from './types';

export default function HomeCard({ Icon, title, description, href, color, btnText }: ICardProps) {
    return (
        <Link href={`${href}`} className={style.card}>
            <Icon sx={{ color: color, fontSize: '2.5rem' }}></Icon>
            <div className={style.title}>{title}</div>
            <div className={style.description}>{description}</div>
            <div className={style.view}>{btnText}</div>
        </Link>
    );
}
