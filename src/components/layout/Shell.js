import React, { useState } from 'react';
import { Footer, Header, Sidebar } from '.';
import { classNames } from '../../utils';
import logo from '../../assets/img/isn-logo-footer.png';

const Shell = () => {
    const [showMobileSidebar, setShowMobileSidebar] = useState(false);

    return (
        <div className="h-screen flex overflow-hidden bg-gray-200">
            {/* Mobile sidebar */}
            <div className="md:hidden">
                <div
                    onClick={() => setShowMobileSidebar(false)}
                    className={classNames(
                        'fixed inset-0 z-40 bg-gray-600 opacity-0 pointer-events-none transition-opacity ease-linear duration-300',
                        showMobileSidebar
                            ? 'opacity-75 pointer-events-auto'
                            : 'opacity-0 pointer-events-none'
                    )}
                ></div>

                <div
                    className={classNames(
                        'fixed inset-y-0 left-0 flex flex-col z-40 max-w-xs w-full bg-gray-800 transform ease-in-out duration-300',
                        showMobileSidebar
                            ? 'translate-x-0'
                            : '-translate-x-full'
                    )}
                >
                    <div className="absolute top-0 right-0 -mr-14 p-1">
                        {/* Close menu button */}
                        <button
                            onClick={() =>
                                setShowMobileSidebar(!showMobileSidebar)
                            }
                            className={classNames(
                                'flex items-center justify-center h-12 w-12 rounded-full focus:outline-none focus:bg-gray-600',
                                showMobileSidebar ? 'opacity-100' : 'opacity-0'
                            )}
                        >
                            <svg
                                className="h-6 w-6 text-white"
                                stroke="currentColor"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>

                    <div className="flex-shrink-0 flex items-center h-16 px-4 bg-gray-900">
                        <img className="h-8 w-auto" src={logo} alt="See.City" />
                    </div>

                    {/* Mobile Sidebar */}
                    <div className="flex-1 h-0 overflow-y-auto"></div>
                </div>
            </div>

            {/* Sidebar */}
            <Sidebar />

            {/* Header    */}
            <div className="flex flex-col w-0 flex-1 overflow-hidden">
                <Header />

                {/* Main content */}
                <main
                    className="flex-1 relative z-0 overflow-y-auto py-6 focus:outline-none"
                    tabIndex="0"
                >
                    {/* <Router /> */}
                </main>

                <Footer />
            </div>
        </div>
    );
};

export default Shell;
