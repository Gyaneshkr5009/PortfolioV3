import { useTab } from '../context/TabContext';
import {
    About,
    Contact,
    Certificates,
    Portfolio,
    Resume
} from './index';

export default function RightPane() {
    const tabs = ['About', 'Resume','Portfolio', 'Certificates', 'Contact'];
    const { activeTab, setActiveTab } = useTab();

    const renderTabContent = () => {
        switch (activeTab) {
            case 'About':
                return <About />;
            case 'Contact':
                return <Contact />;
            case 'Certificates':
                return <Certificates />;
            case 'Portfolio':
                return <Portfolio />;
            case 'Resume':
                return <Resume />;
            default:
                return <About />;
        }
    };

    return (
        <div className="w-full min-h-screen bg-white pb-20 md:pb-2">
            {/* Desktop Tabs */}
            <div className="hidden md:flex justify-end gap-2 p-2 border-b bg-[#040B14] rounded-s-full rounded-t-none shadow-sm w-max ml-auto fixed top-0 left-0 right-0 z-50 before:block before:w-4">
                {tabs.map((tab) => (
                <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`md:px-2 lg:px-4 py-2 font-semibold transition-colors duration-300 ${
                    activeTab === tab
                        ? 'text-indigo-400 border-b-2 border-indigo-400'
                        : 'text-gray-300 hover:text-white'
                    }`}
                >
                    {tab}
                </button>
                ))}
            </div>

            {/* Tab Content */}
            <div className="flex-1 p-2"> {/* Add padding-top to push content down */}
                {renderTabContent()}
            </div>

            {/* Mobile Bottom Nav */}
            <nav className="md:hidden fixed bottom-0 left-0 w-full bg-[#253030] backdrop-blur-md border-t border-gray-700 rounded-t-xl shadow-md z-40">
                <ul className="flex justify-center items-center flex-wrap px-2">
                    {tabs.map(tab => (
                        <li key={tab} className="mx-2">
                            <button
                                onClick={() => setActiveTab(tab)}
                                className={`text-sm px-2 py-2 font-medium transition-colors duration-300 ${
                                    activeTab === tab
                                        ? 'text-indigo-400'
                                        : 'text-gray-200 hover:text-gray-400'
                                }`}
                            >
                                {tab}
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
}
