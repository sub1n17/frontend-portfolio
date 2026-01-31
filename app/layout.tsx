import type { Metadata } from 'next';
import { Bebas_Neue, Geist, Geist_Mono, Poppins } from 'next/font/google';
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
        <html className={`${bebas.variable} ${poppins.variable}`}>
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                <Header></Header>
                {children}
                {/* <Footer></Footer> */}
            </body>
        </html>
    );
}
