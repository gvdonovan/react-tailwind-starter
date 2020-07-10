import React, { useState } from 'react';
import { Footer, Header, Sidebar } from '.';
import { classNames } from '../../utils';
import logo from '../../assets/img/isn-logo-footer.png';

// eslint-disable-next-line react/prop-types
const ColorTile = ({ color }) => {
    return (
        <div className="pb-4 col-span-1 bg-white shadow-sm sm:rounded-md">
            <div className="py-2 border-b border-gray-200">
                <span
                    className={`px-2 py-4 text-isn-${color.toLowerCase()}-400 font-medium`}
                >
                    {color} ({`isn-${color.toLowerCase()}`})
                </span>
            </div>
            <div className="pt-2 px-2 flex mb-4">
                <div
                    className={`w-1/4 bg-isn-${color.toLowerCase()}-100 flex items-center h-12`}
                >
                    <div className="flex-1 text-center text-white text-xs">
                        100
                    </div>
                </div>
                <div
                    className={`w-1/4 bg-isn-${color.toLowerCase()}-200 flex items-center h-12`}
                >
                    <div className="flex-1 text-center text-white text-xs">
                        200
                    </div>
                </div>
                <div
                    className={`w-1/4 bg-isn-${color.toLowerCase()}-300 flex items-center h-12`}
                >
                    <div className="flex-1 text-center text-white text-xs">
                        300
                    </div>
                </div>
                <div
                    className={`w-1/4 bg-isn-${color.toLowerCase()}-400 flex items-center h-12`}
                >
                    <div className="flex-1 text-center text-white text-xs">
                        400
                    </div>
                </div>
            </div>
            <div className="px-2 grid grid-cols-2 col-gap-2 row-gap-2">
                <div
                    className={`bg-gradient-r-isn-${color.toLowerCase()} flex items-center h-12`}
                >
                    <div className="flex-1 text-center text-white text-xs">
                        bg-gradient-r
                    </div>
                </div>
                <div
                    className={`bg-gradient-l-isn-${color.toLowerCase()} flex items-center h-12`}
                >
                    <div className="flex-1 text-center text-white text-xs">
                        bg-gradient-l
                    </div>
                </div>

                <div
                    className={`bg-gradient-b-isn-${color.toLowerCase()} flex items-center h-12`}
                >
                    <div className="flex-1 text-center text-white text-xs">
                        bg-gradient-b
                    </div>
                </div>
                <div
                    className={`bg-gradient-t-isn-${color.toLowerCase()} flex items-center h-12`}
                >
                    <div className="flex-1 text-center text-white text-xs">
                        bg-gradient-t
                    </div>
                </div>
                <div
                    className={`bg-gradient-r-isn-${color.toLowerCase()}-light flex items-center h-12`}
                >
                    <div className="flex-1 text-center text-white text-xs">
                        light
                    </div>
                </div>
                <div
                    className={`bg-gradient-r-isn-${color.toLowerCase()}-dark flex items-center h-12`}
                >
                    <div className="flex-1 text-center text-white text-xs">
                        dark
                    </div>
                </div>
            </div>
        </div>
    );
};

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
                        <img className="h-8 w-auto" src={logo} alt="isn" />
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
                    className="flex-1 relative z-0 overflow-y-auto py-6 focus:outline-none bg-gray-100"
                    tabIndex="0"
                >
                    <div className="px-2">
                        <div className="grid grid-cols-1 sm:grid-cols2 lg:grid-cols-3 col-gap-2 row-gap-6">
                            <ColorTile color="Orange" />
                            <ColorTile color="Gray" />
                            <ColorTile color="Violet" />
                            <ColorTile color="Aqua" />
                            <ColorTile color="Green" />
                            <ColorTile color="Yellow" />
                        </div>
                    </div>

                    {/* <Router /> */}
                </main>

                <Footer />
            </div>
        </div>
    );
};

export default Shell;
