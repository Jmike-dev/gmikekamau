import {Download, Linkedin, Github, Mail} from 'lucide-react';
import {TextGenerateEffect} from './ui/TextGenerate';

const HeroSection = () => {
    return (
        <>
            <div className="absolute top-0 left-0 flex min-h-screen w-full items-center justify-center"></div>

            <div className="relative flex flex-col items-center justify-center pt-36 pb-20 sm:min-h-screen sm:p-0">
                <div className="relative z-10 flex flex-col items-center justify-center text-center">
                    <p className="text-brand-text text-sm font-bold tracking-widest uppercase">
                        Based In Kenya
                    </p>

                    <TextGenerateEffect
                        words="Quality Design & Web Development Synergy"
                        className="max-w-5xl text-center text-[40px] leading-snug font-bold tracking-wide md:text-6xl lg:text-7xl"
                    />

                    <p className="text-brand-text max-w-2xl pt-5 pb-8 text-sm sm:text-base md:text-lg">
                        Hi, I'm{' '}
                        <span className="text-brand-primary font-semibold">
                            Michael Gichuhi
                        </span>
                        , I create intuitive, visually stunning and highly
                        functional web applications.
                    </p>

                    {/* CTA Section */}
                    <div className="flex flex-col items-center gap-6 sm:flex-row sm:gap-10">
                        {/* Download CV (Improved Design) */}
                        <a
                            href="/resume/Michael-Gichuhi-CV.pdf"
                            download
                            className="group border-brand-primary/40 bg-brand-primary/10 text-brand-primary hover:bg-brand-primary hover:text-brand-background hover:shadow-brand-primary/30 relative flex items-center gap-3 rounded-full border px-6 py-3 font-semibold backdrop-blur-md transition-all duration-300 hover:shadow-lg"
                        >
                            <Download className="h-5 w-5 transition-transform duration-300 group-hover:translate-y-0.5" />
                            <span>Download CV</span>
                        </a>

                        {/* Social Links */}
                        <div className="flex items-center gap-5">
                            <a
                                href="https://www.linkedin.com/in/michael-gichuhi/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-brand-text/70 hover:text-brand-primary transition-all duration-300 hover:scale-110"
                                aria-label="LinkedIn"
                            >
                                <Linkedin className="h-6 w-6" />
                            </a>

                            <a
                                href="mailto:gmikekamau@gmail.com"
                                className="text-brand-text/70 hover:text-brand-primary transition-all duration-300 hover:scale-110"
                                aria-label="Email"
                            >
                                <Mail className="h-6 w-6" />
                            </a>

                            <a
                                href="https://github.com/Jmike-dev"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-brand-text/70 hover:text-brand-primary transition-all duration-300 hover:scale-110"
                                aria-label="GitHub"
                            >
                                <Github className="h-6 w-6" />
                            </a>
                        </div>
                    </div>

                    <div className="mt-8 mb-10 flex w-full flex-row items-center justify-center"></div>
                </div>
            </div>
        </>
    );
};

export default HeroSection;
