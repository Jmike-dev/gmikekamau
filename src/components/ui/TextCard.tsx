const TechCard = ({
    cardInfo,
}: {
    cardInfo: {
        name: string;
        description: string;
        imageUrl: string; // e.g. "/icons/react.svg" or imported asset
        bgColor: string;
    };
}) => {
    const {name, description, imageUrl, bgColor} = cardInfo;

    return (
        <div className="border-brand-accent bg-brand-secondary hover:border-brand-secondary/60 hover:bg-brand-secondary/80 flex flex-1 gap-5 rounded-xl border p-2.5 transition-colors duration-200">
            <div className={`p-3 ${bgColor} w-fit rounded-lg`}>
                <img
                    src={imageUrl}
                    alt={`${name} logo`}
                    loading="lazy"
                    className={`size-8 object-contain ${
                        name === 'NextJS' ? 'dark:invert' : ''
                    }`}
                />
            </div>

            <div>
                <h4 className="text-brand-text text-lg font-medium">{name}</h4>
                <p className="text-brand-text/70 text-sm">{description}</p>
            </div>
        </div>
    );
};

export default TechCard;
