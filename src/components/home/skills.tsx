import {techCardsItems} from '@/lib/constants';
import {motion} from 'framer-motion';
import TechCard from '../ui/TextCard';

const Skills = () => {
    return (
        <div className="relative z-10 mx-auto w-1/2 py-16 sm:py-24" id="skills">
            <div className="mb-10 space-y-4">
                <motion.h1
                    initial={{opacity: 0, x: -75}}
                    whileInView={{opacity: 1, x: 0}}
                    viewport={{once: true}}
                    transition={{duration: 0.5, delay: 0.25}}
                    className="text-brand-text text-3xl font-bold min-[430px]:text-4xl md:text-5xl"
                >
                    Current technologies
                </motion.h1>
                <motion.p
                    initial={{opacity: 0, x: -90}}
                    whileInView={{opacity: 1, x: 0}}
                    viewport={{once: true}}
                    transition={{duration: 0.5, delay: 0.25}}
                    className="text-dark-200/70 dark:text-brand-text/70 md:max-w- max-w-lg text-sm min-[430px]:text-base"
                >
                    I'm proficient in a range of modern technologies that
                    empower me to build highly functional solutions. These are
                    some of my main technologies.
                </motion.p>
            </div>

            <motion.div
                initial={{opacity: 0, y: 75}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{duration: 0.5, delay: 0.25}}
                className="grid grid-cols-1 items-center justify-between gap-4 sm:grid-cols-2 lg:grid-cols-4"
            >
                {techCardsItems.map((cardItem) => (
                    <TechCard key={cardItem.name} cardInfo={cardItem} />
                ))}
            </motion.div>
        </div>
    );
};

export default Skills;
