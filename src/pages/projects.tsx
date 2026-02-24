import ProjectCard from '@/components/project/ProjectCard';
import {portfolioProjects} from '@/lib/constants';

function MyProjects() {
    return (
        <section id="myProjects" className="min-h-screen">
            <h2 className="text-brand-text mx-auto w-full text-center text-3xl font-bold min-[430px]:text-4xl sm:w-1/2 sm:text-left md:text-5xl">
                My personal projects
            </h2>
            {/* <div className="mx-auto mt-8 grid w-3/4 gap-4 lg:grid-cols-2"> */}
            <div className="mx-auto mt-8 flex w-3/4 justify-center gap-4 lg:w-1/2">
                {portfolioProjects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </section>
    );
}

export default MyProjects;
