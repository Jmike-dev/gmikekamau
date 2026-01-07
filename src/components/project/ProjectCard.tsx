import {MoveUpRight} from 'lucide-react';
import {Link} from 'react-router';
import {motion} from 'framer-motion';
import ProjectTechnologiesMini from './ProjectTechnologiesMini';

interface ProjectProps {
    id: string;
    heading: string;
    subheading: string;
    description: string;
    imageUrl: string;
    techStack: string[];
    liveDemoUrl: string;
    sourceCodeUrl: string;
}

const ProjectCard = ({project}: {project: ProjectProps}) => {
    const {id, heading, imageUrl, techStack} = project;

    return (
        <motion.div
            initial={{opacity: 0, y: 75}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{duration: 0.5, delay: 0.25}}
            className="border-brand-secondary space-y-8 rounded-lg border-2 p-4 sm:p-8"
        >
            <Link
                to={`work/${id}`}
                className="block overflow-hidden rounded-lg"
            >
                <img
                    src={imageUrl}
                    alt={heading}
                    className="h-auto w-full transition-transform duration-700 hover:scale-110"
                    loading="lazy"
                />
            </Link>

            <div>
                <h3 className="text-brand-text text-2xl font-semibold sm:text-3xl">
                    {heading}
                </h3>

                <div className="mt-4 flex flex-col justify-between gap-5 sm:flex-row">
                    <ProjectTechnologiesMini techStack={techStack} />

                    <Link
                        to={`/work/${id}`}
                        className="bg-primary hover:bg-primary/80 self-start rounded-lg p-3 transition-colors duration-200 sm:self-end"
                    >
                        <MoveUpRight className="dark:text-dark-200 size-5 text-[#F3F4F3] sm:size-8" />
                    </Link>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
