import React from 'react';
import { Icons } from '../icons';

const footer = () => {
    return (
        <div className="invisible md:visible bg-isn-gray-100">
            <div className=" w-full py-4 px-4 flex justify-between flex-shrink">
                <div className="flex justify-center md:order-2 invisible md:visible">
                    <a href="#" className="text-gray-400 hover:text-gray-500">
                        <span className="sr-only">Facebook</span>
                        <Icons.FACEBOOK />
                    </a>
                    <a
                        href="#"
                        className="ml-6 text-gray-400 hover:text-gray-500"
                    >
                        <span className="sr-only">Instagram</span>
                        <Icons.INSTAGRAM />
                    </a>
                    <a
                        href="#"
                        className="ml-6 text-gray-400 hover:text-gray-500"
                    >
                        <span className="sr-only">Twitter</span>
                        <Icons.TWITTER />
                    </a>
                </div>
                <div className="mt-8 md:mt-0 md:order-1">
                    <p className="text-center leading-6 text-sm text-isn-gray-300 font-medium">
                        &copy; 2020 ISN
                    </p>
                </div>
            </div>
        </div>
    );
};

export default footer;
