'use client';

import { useEffect, useState } from 'react';
import style from './styles.module.css';

export default function IntroSection() {
    const introCode = `const developer = {
  name: '최수빈',
  stack: ['React', 'TypeScript'],
  solve: (problem) => 'User-First Solution'
};`;

    const [code, setCode] = useState('');
    const [codeIndex, setCodeIndex] = useState(0);
    const [done, setDone] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setCode((prev) => {
                if (codeIndex >= introCode.length) {
                    clearInterval(interval);
                    setDone(true);
                    return prev;
                }

                return prev + introCode[codeIndex];
            });
            setCodeIndex((prev) => prev + 1);
        }, 50);

        return () => clearInterval(interval);
    }, [codeIndex]);

    return (
        <>
            <section>
                <div className={style.fullWidth_wrapper}>
                    <div className={`${style.intro_inner} section_inner`}>
                        <div className={style.window_dots}>
                            <span className={style.dot_red}></span>
                            <span className={style.dot_yellow}></span>
                            <span className={style.dot_green}></span>
                        </div>
                        <pre>
                            <code className={style.code}>
                                {code}
                                {!done && <span className={style.cursor}></span>}
                            </code>
                        </pre>
                    </div>
                </div>
            </section>
        </>
    );
}
