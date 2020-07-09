/* eslint-disable react/prop-types */
import React from 'react';
import UserProfileMenu from './UserProfileMenu';
import icon from '../../assets/img/isn-logo-footer.png';
import { Icons } from '../icons';

const header = (props) => {
    return (
        <div className="relative z-10 flex-shrink-0 flex h-16 bg-white shadow">
            <button
                onClick={props.showSidebar}
                className="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:bg-gray-100 focus:text-gray-600 md:hidden"
            >
                <img className="h-8 w-auto" src={icon} alt="isn" />
            </button>

            <div className="flex-1 px-4 flex justify-between">
                <div className="flex-1 flex">
                    <div className="w-full flex md:ml-0">
                        <label htmlFor="search_field" className="sr-only">
                            Search
                        </label>
                        <div className="relative w-full text-gray-400 focus-within:text-gray-600">
                            <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none">
                                <Icons.SEARCH />
                            </div>
                            <input
                                id="search_field"
                                className="block w-full h-full pl-8 pr-3 py-2 rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 xs:text-sm"
                                placeholder="Search"
                            />
                        </div>
                    </div>
                </div>

                <div className="ml-4 flex items-center md:ml-6">
                    <button className="p-1 text-gray-400 rounded-full hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:shadow-outline focus:text-gray-500">
                        <Icons.BELL />
                    </button>
                    <UserProfileMenu />
                </div>
            </div>
        </div>
    );
};
export default header;
