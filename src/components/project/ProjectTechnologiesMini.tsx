const ProjectTechnologiesMini = ({techStack}: {techStack: string[]}) => {
    return (
        <div className="flex max-w-sm flex-wrap items-center gap-2.5">
            {techStack.map((tech) => (
                <p
                    key={tech}
                    className="text-brand-text hover:text-dark-200 hover:bg-dark-300/10 dark:hover:bg-dark-400 bg-brand-accent w-fit rounded-md border px-4 py-2 text-xs font-medium transition-colors duration-200"
                >
                    {tech}
                </p>
            ))}
        </div>
    );
};

export default ProjectTechnologiesMini;
