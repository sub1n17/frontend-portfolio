import type { Metadata } from 'next';
import {
    Bebas_Neue,
    Geist,
    Geist_Mono,
    JetBrains_Mono,
    Montserrat,
    Poppins,
} from 'next/font/google';
import './globals.css';
import Header from '@/src/components/common/header';
import Footer from '@/src/components/common/footer';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

const poppins = Poppins({
    weight: ['700', '800', '900'],
    subsets: ['latin'],
    variable: '--font-pop',
});

const bebas = Bebas_Neue({
    weight: '400',
    subsets: ['latin'],
    variable: '--font-bebas',
});

const JetBrains = JetBrains_Mono({
    subsets: ['latin'],
    variable: '--font-jetBrains',
});
const montserrat = Montserrat({
    subsets: ['latin'],
    display: 'swap',
    // 사용하고자 하는 모든 두께를 배열에 넣으세요
    weight: ['400', '700', '800'],
    variable: '--font-mont', // CSS 변수로 사용
});

export const metadata: Metadata = {
    title: '포트폴리오',
    description: '프론트엔드 개발자 포트폴리오',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            className={`${bebas.variable} ${poppins.variable} ${JetBrains.variable}  ${montserrat.variable}`}
        >
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                <Header></Header>
                {children}
                {/* <Footer></Footer> */}
            </body>
        </html>
    );
}
