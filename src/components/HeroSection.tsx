import {Download} from 'lucide-react';
import {TextGenerateEffect} from './ui/TextGenerate';

const HeroSection = () => {
    return (
        <>
            <div className="absolute top-0 left-0 flex min-h-screen w-full items-center justify-center">
                {/* Radial gradient for the container to give a faded look */}
                {/* <div className="dark:bg-dark-100 bg-brand-background pointer-events-none absolute inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" /> */}
            </div>

            <div className="relative flex flex-col items-center justify-center pt-36 pb-20 sm:min-h-screen sm:p-0">
                <div className="relative z-10 flex flex-col items-center justify-center text-center">
                    <p className="text-brand-text text-sm font-bold tracking-widest uppercase">
                        Based In Kenya
                    </p>
                    <TextGenerateEffect
                        words="Quality Design & Web Development Synergy"
                        className="max-w-5xl text-center text-[40px] leading-snug font-bold tracking-wide md:text-6xl lg:text-7xl"
                    />
                    <p className="text-brand-text pt-5 pb-8 text-sm sm:text-base md:text-lg">
                        Hi, I'm Michael Gichuhi, I create intuitive, visually
                        stunning and highly functional web applications.
                    </p>
                    <div className="flex flex-col items-center gap-4 sm:flex-row">
                        {/* //!: Replace this content with resume data */}
                        <a
                            href="/resume/CV_en.pdf"
                            download
                            className="group flex items-center gap-2.5"
                        >
                            <Download className="text-brand-primary" />
                            <span className="text-brand-primary font-semibold transition-colors duration-200 group-hover:text-white/70">
                                Download CV
                            </span>
                        </a>
                    </div>
                    <div className="mt-8 mb-10 flex w-full flex-row items-center justify-center">
                        {/* <AnimatedTooltip items={tooltipItems} /> */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeroSection;
