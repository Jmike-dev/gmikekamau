import {useParams} from 'react-router';

const WorkDetails = () => {
    const {id} = useParams<{id: string}>();

    return (
        <section className="p-8">
            <h1 className="text-3xl font-bold">Project Details</h1>
            <p className="mt-4 text-lg">Project ID: {id}</p>
        </section>
    );
};

export default WorkDetails;
