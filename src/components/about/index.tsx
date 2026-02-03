import ContactSection from './ContactSection';
import HeroSection from './HeroSection';
import ValueSection from './ValueSection';
import InfoSection from './InfoSection';
import style from './styles.module.css';
export default function AboutPage() {
    return (
        <>
            <main className={style.about_container}>
                <HeroSection></HeroSection>
                <ValueSection></ValueSection>
                <InfoSection></InfoSection>
                <ContactSection></ContactSection>
            </main>
        </>
    );
}
