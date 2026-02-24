import {cn} from '@/lib/utils';
import {
    AnimatePresence,
    motion,
    useMotionValueEvent,
    useScroll,
} from 'framer-motion';
import {useState, type JSX} from 'react';

export const Navbar = ({
    navItems,
    className,
}: {
    navItems: {
        name: string;
        link: string;
        icon?: JSX.Element;
    }[];
    className?: string;
}) => {
    const {scrollYProgress} = useScroll();
    const [visible, setVisible] = useState(true);

    useMotionValueEvent(scrollYProgress, 'change', (current) => {
        if (typeof current === 'number') {
            const previous = scrollYProgress.getPrevious() ?? 0;
            const direction = current - previous;

            if (current < 0.05) {
                setVisible(true);
            } else {
                setVisible(direction < 0);
            }
        }
    });

    return (
        <AnimatePresence mode="wait">
            <motion.div
                initial={{opacity: 1, y: -100}}
                animate={{
                    y: visible ? 0 : -100,
                    opacity: visible ? 1 : 0,
                }}
                transition={{duration: 0.2}}
                className={cn(
                    'border-brand-secondary bg-brand-background shadow-brand-secondary fixed inset-x-0 top-10 z-[5000] mx-auto hidden max-w-fit items-center justify-center space-x-4 rounded-lg border px-8 py-4 sm:flex',
                    className
                )}
            >
                {navItems.map((navItem, idx) => (
                    <button
                        key={`link-${idx}`}
                        onClick={() => {
                            const el = document.querySelector(navItem.link);
                            el?.scrollIntoView({behavior: 'smooth'});
                        }}
                        className="text-brand-text hover:text-brand-secondary relative flex cursor-pointer items-center space-x-1"
                    >
                        <span className="block sm:hidden">{navItem.icon}</span>
                        <span className="hidden font-medium capitalize sm:block">
                            {navItem.name}
                        </span>
                    </button>
                ))}
            </motion.div>
        </AnimatePresence>
    );
};
