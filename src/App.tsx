import './App.css';
import Home from '@/pages/home';
// import Contact from '@/pages/contact';
import {BriefcaseBusiness, House} from 'lucide-react';
import {Navbar} from '@/components/ui/Navbar';
import {Navigate, Route, Routes} from 'react-router';
import WorkDetails from './pages/WorkDetails';
import MyProjects from './pages/projects';

const navItems = [
    {name: 'Home', link: '#home', icon: <House />},
    {name: 'skills', link: '#skills', icon: <BriefcaseBusiness />},
    {name: 'projects', link: '#myProjects', icon: <BriefcaseBusiness />},
    // {name: 'Contact', link: '#contact', icon: <ContactIco />},
];

function App() {
    return (
        <main className="bg-brand-background cursor-default">
            <Navbar navItems={navItems} />

            <Routes>
                {/* Home Page */}
                <Route
                    path="/"
                    element={
                        <>
                            <Home />
                            <MyProjects />
                            {/* <Contact /> */}
                        </>
                    }
                />
                {/* Project Details Page */}
                <Route path="/work/:id" element={<WorkDetails />} />

                {/* Catch-all: redirect unknown routes to home */}
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </main>
    );
}

export default App;
