import ProjectCard from '@/components/project/ProjectCard';
import {portfolioProjects} from '@/lib/constants';

function MyProjects() {
    return (
        <section id="myProjects" className="min-h-screen">
            <h2 className="text-brand-text mx-auto w-1/2 text-3xl font-bold min-[430px]:text-4xl md:text-5xl">
                My personal projects
            </h2>
            <div className="mx-auto mt-8 grid w-3/4 gap-4 lg:grid-cols-2">
                {portfolioProjects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </section>
    );
}

export default MyProjects;
