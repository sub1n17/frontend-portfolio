'use client';

import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import PersonIcon from '@mui/icons-material/Person';
import style from './styles.module.css';
import { useState } from 'react';

export default function ProjectTabs() {
    const [tabActive, setTabActive] = useState('personal');

    return (
        <>
            <div className={style.tab_wrapper}>
                <div
                    onClick={() => setTabActive('personal')}
                    className={`${style.tab} ${tabActive === 'personal' ? style.active : ''}`}
                >
                    <span className={style.iconWrapper}>
                        <PersonOutlineOutlinedIcon className={`${style.icon} ${style.outlined}`} />
                        <PersonIcon className={`${style.icon} ${style.filled}`} />
                    </span>

                    <span className={style.tab_txt}>개인 프로젝트</span>
                </div>
                <div
                    onClick={() => setTabActive('company')}
                    className={`${style.tab} ${tabActive === 'company' ? style.active : ''}`}
                >
                    <span className={style.iconWrapper}>
                        <BusinessCenterOutlinedIcon className={`${style.icon} ${style.outlined}`} />
                        <BusinessCenterIcon className={`${style.icon} ${style.filled}`} />
                    </span>

                    <span className={style.tab_txt}>회사 프로젝트</span>
                </div>
            </div>
        </>
    );
}
