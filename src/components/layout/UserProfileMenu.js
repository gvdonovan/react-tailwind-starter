/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import ClickAwayListener from 'react-click-away-listener';

const Avatar = ({ text }) => {
    return (
        <span className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-orange-500">
            <span className="text-md font-medium leading-none text-white">
                {text}
            </span>
        </span>
    );
};

const UserProfileMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="ml-3 relative">
            <div>
                <button
                    className="max-w-xs flex items-center text-sm rounded-full focus:outline-none focus:shadow-outline"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <Avatar text="GD" />
                </button>
            </div>
            {isOpen && (
                <ClickAwayListener onClickAway={() => setIsOpen(false)}>
                    <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg">
                        <div className="py-1 rounded-md bg-white shadow-xs">
                            <span
                                href="#"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition ease-in-out duration-150"
                            >
                                Logged in as:
                                <br />
                                Greg Donovan
                            </span>

                            <a
                                href="#"
                                className="group flex items-center px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                            >
                                Settings
                            </a>

                            <div className="border-t border-gray-100"></div>

                            <div className="">
                                <a
                                    href="#"
                                    className="group flex items-center px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                                >
                                    Sign Out
                                </a>
                            </div>
                        </div>
                    </div>
                </ClickAwayListener>
            )}
        </div>
    );
};

export default UserProfileMenu;
