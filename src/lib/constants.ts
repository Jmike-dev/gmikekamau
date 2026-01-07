export const techCardsItems = [
    {
        name: 'TypeScript',
        description: 'JavaScript but better',
        imageUrl: '/imgs/logos/typescript.svg',
        bgColor: 'bg-[#3178C6]/20',
    },
    {
        name: 'JavaScript',
        description: 'language the powers the web ',
        imageUrl: '/imgs/logos/javascript.svg',
        bgColor: 'bg-[#3178C6]/20',
    },
    {
        name: 'React',
        description: 'JavaScript Library',
        imageUrl: '/imgs/logos/react.svg',
        bgColor: 'bg-[#61DAFB]/20',
    },
    {
        name: 'Angular',
        description: 'JavaScript framework',
        imageUrl: '/imgs/logos/angular.svg',
        bgColor: 'bg-[#3178C6]/20',
    },
    {
        name: 'NextJS',
        description: 'React framework',
        imageUrl: '/imgs/logos/nextjs.svg',
        bgColor: 'bg-dark-200/10 dark:bg-white/10',
    },
    {
        name: 'Tailwind',
        description: 'CSS framework',
        imageUrl: '/imgs/logos/tailwindcss.svg',
        bgColor: 'bg-[#0EA5E9]/20',
    },
    {
        name: 'Git',
        description: 'Version control',
        imageUrl: '/imgs/logos/git.svg',
        bgColor: 'bg-[#F1502F]/20',
    },
    {
        name: 'Supabase',
        description: 'Backend tool',
        imageUrl: '/imgs/logos/supabase.svg',
        bgColor: 'bg-[#3ECF8E]/20',
    },
    {
        name: 'Firebase',
        description: 'Backend tool',
        imageUrl: '/imgs/logos/firebase.svg',
        bgColor: 'bg-[#3ECF8E]/20',
    },
    {
        name: 'Nestjs',
        description: 'node js backend framework',
        imageUrl: '/imgs/logos/nestjs.svg',
        bgColor: 'bg-[#689F63]/30',
    },
    {
        name: 'Prisma',
        description: 'ORM',
        imageUrl: '/imgs/logos/prisma.svg',
        bgColor: 'bg-[#0C344B]/20',
    },
    {
        name: 'PostgreSQL',
        description: 'OR database system',
        imageUrl: '/imgs/logos/postgresql.svg',
        bgColor: 'bg-[#336791]/20',
    },
];

export const portfolioProjects = [
    {
        id: 'shoptidy',
        heading: 'Shoptidy',
        subheading: 'a modern e-commerce website',
        description:
            'A modern website with all ecommerce functionalities. It includes features like product browsing, shopping cart, user authentication, ordering a product... The application is developed with react + typescript for frontend part, and Supabase as backend.',
        imageUrl: '/imgs/projects/medicalRecorder.png',
        techStack: [
            'TypeScript',
            'React',
            'Redux',
            'Supabase',
            'TailwindCSS',
            'shadcn/ui',
        ],
        liveDemoUrl: 'https://shoptidy.vercel.app',
        sourceCodeUrl: 'https://github.com/andrijaweb/ecommerce-app',
    },
    {
        id: 'exptracker',
        heading: 'ExpenseTracker',
        subheading: 'application for tracking your incomes and expenses.',
        description:
            'Track your incomes and expenses in an easy way. Clear chart overviews will improve your organization. The application is developed with react + typescript for frontend part, and nodejs with mongodb.',
        imageUrl: '/imgs/projects/medicalRecorderLogin.png',
        techStack: [
            'TypeScript',
            'React',
            'NodeJS',
            'MongoDB',
            'ExpressJS',
            'TailwindCSS',
            'shadcn/ui',
        ],
        liveDemoUrl: 'https://expense-tracker-app-eq85.onrender.com/',
        sourceCodeUrl: 'https://github.com/andrijaweb',
    },
];
