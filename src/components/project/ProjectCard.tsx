import {motion} from 'framer-motion';
import {ExternalLink, Github} from 'lucide-react';

type Project = {
    id: string;
    heading: string;
    subheading: string;
    description: string;
    imageUrl: string;
    techStack: string[];
    liveDemoUrl: string;
    sourceCodeUrl: string;
};

export default function ProjectCard({project}: {project: Project}) {
    return (
        <motion.div
            whileHover={{y: -8}}
            transition={{duration: 0.3}}
            className="group border-brand-secondary/30 bg-brand-background hover:border-brand-primary relative overflow-hidden rounded-2xl border shadow-lg transition-all duration-300"
        >
            {/* Glow effect */}
            <div className="bg-brand-primary/10 absolute -inset-1 opacity-0 blur-xl transition-all duration-500 group-hover:opacity-30" />

            {/* Image */}
            <div className="relative h-60 w-full overflow-hidden rounded-t-2xl">
                <img
                    src={project.imageUrl}
                    alt={project.heading}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="from-brand-background absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-80" />
            </div>

            {/* Content */}
            <div className="relative space-y-5 p-6">
                {/* Title */}
                <div>
                    <h3 className="text-brand-text text-2xl font-semibold">
                        {project.heading}
                    </h3>
                    <p className="text-brand-primary text-sm">
                        {project.subheading}
                    </p>
                </div>

                {/* Description */}
                <p className="text-brand-text/70 text-sm leading-relaxed">
                    {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, index) => (
                        <span
                            key={index}
                            className="border-brand-secondary/40 bg-brand-secondary/20 text-brand-text rounded-full border px-3 py-1 text-xs font-medium"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Buttons */}
                <div className="flex items-center gap-4 pt-2">
                    <a
                        href={project.liveDemoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-brand-primary text-brand-background hover:shadow-brand-primary/40 flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold transition-all duration-300 hover:shadow-lg hover:brightness-110"
                    >
                        Live Demo <ExternalLink size={16} />
                    </a>

                    <a
                        href={project.sourceCodeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border-brand-accent text-brand-accent hover:bg-brand-accent hover:text-brand-text flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium transition-all duration-300"
                    >
                        Code <Github size={16} />
                    </a>
                </div>
            </div>
        </motion.div>
    );
}
