import HeroSection from '@/components/HeroSection';
import Skills from '@/components/home/skills';

function Home() {
    return (
        <section id="home" className="min-h-screen space-y-4">
            <HeroSection />
            <Skills />
        </section>
    );
}

export default Home;
