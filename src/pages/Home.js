import React from 'react';

const Stats = ({ title }) => {
    return (
        <div>
            <div className="px-4 py-5 sm:p-4 md:border-l">
                <div>
                    <div className="text-base leading-6 font-normal text-isn-gray-300">
                        {title}
                    </div>
                    <div className="mt-1 flex justify-between items-baseline md:block lg:flex">
                        <div className="flex items-baseline text-2xl leading-8 font-semibold text-isn-violet-300">
                            655
                            <span className="ml-2 text-sm leading-5 font-medium text-isn-violet-200">
                                from 614
                            </span>
                        </div>
                        <div className="inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium leading-5 bg-isn-green-100 text-isn-green-400 md:mt-2 lg:mt-0">
                            <svg
                                className="-ml-1 mr-0.5 flex-shrink-0 self-center h-5 w-5 text-isn-green-400"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <span className="sr-only">Increased by</span>
                            12%
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const HomePage = () => {
    return (
        <div>
            <h3 className="text-lg leading-6 font-medium text-isn-gray-300">
                This Year over Last Year
            </h3>
            <div className="mt-2 grid grid-cols-1 rounded-lg bg-white overflow-hidden shadow md:grid-cols-3">
                <Stats title="Hiring Clients" ty="655" ly="614" />
                <Stats title="Contractors" ty="70,200" ly="68,500" />
                <Stats title="Consulting Projects" ty="655" ly="614" />
            </div>
        </div>
    );
};

export default HomePage;
