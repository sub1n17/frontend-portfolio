'use client';

import Link from 'next/link';
import style from './styles.module.css';
import { ICardProps } from './types';
import Image from 'next/image';

export default function HomeCard({ title, description, href, image }: ICardProps) {
    return (
        <Link href={`${href}`} className={style.card}>
            <h2 className={style.title}>{title}</h2>
            <div className={style.description_wrapper}>
                <span className={style.description}>{description}</span>
                <Image
                    src={image}
                    alt={title}
                    width={100}
                    height={100}
                    className={style.card_img}
                ></Image>
            </div>
        </Link>
    );
}
