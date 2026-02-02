import ContactSection from './ContactSection';
import ExperienceSection from './ExperienceSection';
import HeroSection from './HeroSection';
import SkillSection from './SkillSection';
import ValueSection from './ValueSection';

export default function AboutPage() {
    return (
        <>
            <HeroSection></HeroSection>
            <ExperienceSection></ExperienceSection>
            <SkillSection></SkillSection>
            <ValueSection></ValueSection>
            <ContactSection></ContactSection>
        </>
    );
}
