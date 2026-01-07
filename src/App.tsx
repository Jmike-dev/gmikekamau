import './App.css';
import Home from '@/pages/home';
import Contact from '@/pages/contact';
import {BriefcaseBusiness, Contact as ContactIco, House} from 'lucide-react';
import {Navbar} from '@/components/ui/Navbar';

const navItems = [
    {name: 'Home', link: '#home', icon: <House />},
    {name: 'skills', link: '#skills', icon: <BriefcaseBusiness />},
    {name: 'my projects', link: '#my-projects', icon: <BriefcaseBusiness />},
    {name: 'Contact', link: '#contact', icon: <ContactIco />},
];

function App() {
    return (
        <main className="bg-brand-background cursor-default">
            <Navbar navItems={navItems} />
            <Home />
            <Contact />
        </main>
    );
}

export default App;
