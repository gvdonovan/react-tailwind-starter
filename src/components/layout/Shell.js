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
                            <div className="pb-4 col-span-1 bg-white shadow-sm sm:rounded-md">
                                <div className="py-2 border-b border-gray-200">
                                    <span className="px-2 py-4 text-isn-orange-400">
                                        Orange
                                    </span>
                                </div>
                                <div className="pt-2 px-2 flex mb-4">
                                    <div className="w-1/4 bg-isn-orange-400 h-12"></div>
                                    <div className="w-1/4 bg-isn-orange-300 h-12"></div>
                                    <div className="w-1/4 bg-isn-orange-200 h-12"></div>
                                    <div className="w-1/4 bg-isn-orange-100 h-12"></div>
                                </div>
                                <div className="px-2 grid grid-cols-2 col-gap-2 row-gap-2">
                                    <div className="bg-gradient-l-isn-orange h-24"></div>
                                    <div className="bg-gradient-r-isn-orange h-24"></div>
                                    <div className="bg-gradient-t-isn-orange h-24"></div>
                                    <div className="bg-gradient-b-isn-orange h-24"></div>
                                </div>
                            </div>

                            <div className="pb-4 col-span-1 bg-white shadow-sm sm:rounded-md">
                                <div className="py-2 border-b border-gray-200">
                                    <span className="px-2 py-4 text-isn-gray-400">
                                        Gray
                                    </span>
                                </div>
                                <div className="pt-2 px-2 flex mb-4">
                                    <div className="w-1/4 bg-isn-gray-400 h-12"></div>
                                    <div className="w-1/4 bg-isn-gray-300 h-12"></div>
                                    <div className="w-1/4 bg-isn-gray-200 h-12"></div>
                                    <div className="w-1/4 bg-isn-gray-100 h-12"></div>
                                </div>
                                <div className="px-2 grid grid-cols-2 col-gap-2 row-gap-2">
                                    <div className="bg-gradient-l-isn-gray h-24"></div>
                                    <div className="bg-gradient-r-isn-gray h-24"></div>
                                    <div className="bg-gradient-t-isn-gray h-24"></div>
                                    <div className="bg-gradient-b-isn-gray h-24"></div>
                                </div>
                            </div>
                            <div className="pb-4 col-span-1 bg-white shadow-sm sm:rounded-md">
                                <div className="py-2 border-b border-gray-200">
                                    <span className="px-2 py-4 text-isn-violet-400">
                                        Violet
                                    </span>
                                </div>
                                <div className="pt-2 px-2 flex mb-4">
                                    <div className="w-1/4 bg-isn-violet-400 h-12"></div>
                                    <div className="w-1/4 bg-isn-violet-300 h-12"></div>
                                    <div className="w-1/4 bg-isn-violet-200 h-12"></div>
                                    <div className="w-1/4 bg-isn-violet-100 h-12"></div>
                                </div>
                                <div className="px-2 grid grid-cols-2 col-gap-2 row-gap-2">
                                    <div className="bg-gradient-l-isn-violet h-24"></div>
                                    <div className="bg-gradient-r-isn-violet h-24"></div>
                                    <div className="bg-gradient-t-isn-violet h-24"></div>
                                    <div className="bg-gradient-b-isn-violet h-24"></div>
                                </div>
                            </div>
                            <div className="pb-4 col-span-1 bg-white shadow-sm sm:rounded-md">
                                <div className="py-2 border-b border-gray-200">
                                    <span className="px-2 py-4 text-isn-aqua-400">
                                        Aqua
                                    </span>
                                </div>
                                <div className="pt-2 px-2 flex mb-4">
                                    <div className="w-1/4 bg-isn-aqua-400 h-12"></div>
                                    <div className="w-1/4 bg-isn-aqua-300 h-12"></div>
                                    <div className="w-1/4 bg-isn-aqua-200 h-12"></div>
                                    <div className="w-1/4 bg-isn-aqua-100 h-12"></div>
                                </div>
                                <div className="px-2 grid grid-cols-2 col-gap-2 row-gap-2">
                                    <div className="bg-gradient-l-isn-aqua h-24"></div>
                                    <div className="bg-gradient-r-isn-aqua h-24"></div>
                                    <div className="bg-gradient-t-isn-aqua h-24"></div>
                                    <div className="bg-gradient-b-isn-aqua h-24"></div>
                                </div>
                            </div>
                            <div className="pb-4 col-span-1 bg-white shadow-sm sm:rounded-md">
                                <div className="py-2 border-b border-gray-200">
                                    <span className="px-2 py-4 text-isn-green-400">
                                        Green
                                    </span>
                                </div>
                                <div className="pt-2 px-2 flex mb-4">
                                    <div className="w-1/4 bg-isn-green-400 h-12"></div>
                                    <div className="w-1/4 bg-isn-green-300 h-12"></div>
                                    <div className="w-1/4 bg-isn-green-200 h-12"></div>
                                    <div className="w-1/4 bg-isn-green-100 h-12"></div>
                                </div>
                                <div className="px-2 grid grid-cols-2 col-gap-2 row-gap-2">
                                    <div className="bg-gradient-l-isn-green h-24"></div>
                                    <div className="bg-gradient-r-isn-green h-24"></div>
                                    <div className="bg-gradient-t-isn-green h-24"></div>
                                    <div className="bg-gradient-b-isn-green h-24"></div>
                                </div>
                            </div>
                            <div className="pb-4 col-span-1 bg-white shadow-sm sm:rounded-md">
                                <div className="py-2 border-b border-gray-200">
                                    <span className="px-2 py-4 text-isn-yellow-400">
                                        Yellow
                                    </span>
                                </div>
                                <div className="pt-2 px-2 flex mb-4">
                                    <div className="w-1/4 bg-isn-yellow-400 h-12"></div>
                                    <div className="w-1/4 bg-isn-yellow-300 h-12"></div>
                                    <div className="w-1/4 bg-isn-yellow-200 h-12"></div>
                                    <div className="w-1/4 bg-isn-yellow-100 h-12"></div>
                                </div>
                                <div className="px-2 grid grid-cols-2 col-gap-2 row-gap-2">
                                    <div className="bg-gradient-l-isn-yellow h-24"></div>
                                    <div className="bg-gradient-r-isn-yellow h-24"></div>
                                    <div className="bg-gradient-t-isn-yellow h-24"></div>
                                    <div className="bg-gradient-b-isn-yellow h-24"></div>
                                </div>
                            </div>
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
