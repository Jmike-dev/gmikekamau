const TechCard = ({
    cardInfo,
}: {
    cardInfo: {
        name: string;
        description: string;
        imageUrl: string;
        bgColor: string;
    };
}) => {
    const {name, description, imageUrl, bgColor} = cardInfo;

    return (
        <div className="group flex flex-col items-center rounded-2xl border border-white/10 bg-white/5 p-3 text-center backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10 hover:shadow-lg hover:shadow-black/10 sm:p-4">
            {/* Icon Container */}
            <div
                className={`flex items-center justify-center rounded-xl p-2 sm:p-3 ${bgColor} transition-transform duration-300 group-hover:scale-110`}
            >
                <img
                    src={imageUrl}
                    alt={`${name} logo`}
                    loading="lazy"
                    className={`size-6 object-contain sm:size-8 ${name === 'NextJS' ? 'dark:invert' : ''} `}
                />
            </div>

            {/* Name */}
            <h4 className="text-brand-text mt-3 text-sm font-semibold sm:text-base">
                {name}
            </h4>

            {/* Description (hidden on very small screens for compactness) */}
            <p className="text-brand-text/70 mt-1 line-clamp-2 hidden text-xs leading-snug sm:block sm:text-sm">
                {description}
            </p>
        </div>
    );
};

export default TechCard;
