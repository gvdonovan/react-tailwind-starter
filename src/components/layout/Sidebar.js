import React from 'react';
import { NavLink, useRouteMatch } from 'react-router-dom';
import logo from '../../assets/img/isn-logo-footer.png';

//TODO: Add links
const navLinks = [];

const Sidebar = () => {
    // const { url } = useRouteMatch();

    const className =
        'mt-1 mx-2 group flex items-center px-2 py-2 text-sm leading-5 font-medium text-gray-300 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-800 transition ease-in-out duration-150';
    const activeClassName =
        'text-blue-200 bg-gray-800 rounded-md focus:outline-none focus:text-blue-200';

    return (
        <div className="hidden md:flex md:flex-shrink-0">
            <div className="flex flex-col w-64">
                <div className="flex items-center h-16 flex-shrink-0 px-4 bg-isn-gray-100 shadow">
                    <img className="h-8 w-auto" src={logo} alt="isn" />
                </div>
                <div className="h-0 flex-1 flex flex-col overflow-y-auto bg-isn-gray-200">
                    {/* <nav className="flex-1 px-2 py-4">
                        {navLinks.map((route, index) => {
                            return (
                                <NavLink
                                    key={index}
                                    exact={route.exact}
                                    to={`${url}${route.to}`}
                                    className={className}
                                    activeClassName={activeClassName}
                                >
                                    <span className="pl-6 ">{route.name}</span>
                                </NavLink>
                            );
                        })}
                    </nav> */}
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
