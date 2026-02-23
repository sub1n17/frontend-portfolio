'use client';

import { useEffect, useState } from 'react';
import style from './styles.module.css';
import { motion } from 'framer-motion';

export default function IntroSection() {
    const introCode = `const developer = {
  name: '최수빈',
  stack: ['React', 'TypeScript'],
  solve: (problem) => 'User-First Solution'
};`;

    const [code, setCode] = useState('');
    const [codeIndex, setCodeIndex] = useState(0);
    const [done, setDone] = useState(false);
    const [startTyping, setStartTyping] = useState(false);

    useEffect(() => {
        if (!startTyping) return; // 뷰포트에 들어올 때 타이핑 시작
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
    }, [codeIndex, introCode, startTyping]);

    const highlight = (text: string) => {
        return text
            .split(/(\s+|const|solve|developer|name|stack|'[^']*'|=>|[{}[\],:=])/g)
            .map((el, i) => {
                // 키워드
                if (el === 'const') {
                    return (
                        <span key={i} style={{ color: '#4A8EDB' }}>
                            {el}
                        </span>
                    );
                }

                // 변수 / 객체 키
                if (['developer', 'name', 'stack'].includes(el)) {
                    return (
                        <span key={i} style={{ color: '#6FC3FF' }}>
                            {el}
                        </span>
                    );
                }

                // 함수
                if (el === 'solve') {
                    return (
                        <span key={i} style={{ color: '#C5C86A' }}>
                            {el}
                        </span>
                    );
                }

                // 문자열 (따옴표 치는 순간 바로 적용됨)
                if (el.startsWith("'")) {
                    return (
                        <span key={i} style={{ color: '#032f62' }}>
                            {el}
                        </span>
                    );
                }

                // 기호
                if (/^[{}[\],:=]$/.test(el) || el === '=>') {
                    return (
                        <span key={i} style={{ color: '#BFBFBF' }}>
                            {el}
                        </span>
                    );
                }

                // 나머지
                return el;
            });
    };

    return (
        <>
            <section className="home_section">
                <motion.div
                    className={style.fullWidth_wrapper}
                    initial={{
                        width: '80%',
                        borderRadius: '20px',
                        backgroundColor: '#f8f7ff',
                    }}
                    whileInView={{
                        width: '100%',
                        borderRadius: '0px',
                    }}
                    transition={{ duration: 1, ease: 'easeInOut', delay: 0.5 }}
                    viewport={{ once: true, amount: 0.4 }}
                    onViewportEnter={() => setTimeout(() => setStartTyping(true), 700)}
                    style={{
                        margin: '0 auto',
                    }}
                >
                    <div className={`${style.intro_inner} section_inner`}>
                        <div className={style.window_dots}>
                            <span className={style.dot_red}></span>
                            <span className={style.dot_yellow}></span>
                            <span className={style.dot_green}></span>
                        </div>
                        <pre>
                            <code className={style.code}>
                                {highlight(code)}
                                {!done && <span className={style.cursor}></span>}
                            </code>
                        </pre>
                    </div>
                </motion.div>
            </section>
        </>
    );
}
