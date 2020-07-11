import React from 'react';
import { NavLink, useRouteMatch } from 'react-router-dom';
import logo from '../../assets/img/isn-logo-footer.png';

//TODO: links should be passed in based on a UAC
const links = [
    {
        name: 'Home',
        to: '/',
        exact: true,
    },
    {
        name: 'Colors',
        to: '/colors',
        exact: true,
    },
    {
        name: 'Link1',
        to: '/l1',
        exact: true,
    },
    {
        name: 'Link2',
        to: '/l2',
        exact: true,
    },
    {
        name: 'Link3',
        to: '/l3',
        exact: true,
    },
];

const Sidebar = () => {
    const { url } = useRouteMatch();

    const className = 'flex items-center py-2 text-isn-gray-100';
    const activeClassName =
        'text-white bg-isn-gray-200 focus:outline-none focus:text-white';
    // const className =
    //     'mt-1 mx-2 group flex items-center px-2 py-2 text-sm leading-5 font-medium text-white rounded-md hover:text-white hover:bg-isn-violet-400 focus:outline-none focus:text-white focus:bg-isn-violet-400 transition ease-in-out duration-150';
    // const activeClassName =
    //     'text-white bg-isn-violet-400 rounded-md focus:outline-none focus:text-white';

    return (
        <div className="hidden md:flex md:flex-shrink-0">
            <div className="flex flex-col w-64">
                <div className="flex items-center h-16 flex-shrink-0 px-4 bg-isn-gray-100 shadow">
                    <img className="h-8 w-auto" src={logo} alt="isn" />
                </div>
                <div className="h-0 flex-1 flex flex-col overflow-y-auto bg-gradient-b-isn-gray-dark">
                    <nav className="flex-1">
                        {links.map((route, index) => {
                            return (
                                <NavLink
                                    key={index}
                                    exact={route.exact}
                                    // to={`${url}${route.to}`}
                                    to={`${route.to}`}
                                    className={className}
                                    activeClassName={activeClassName}
                                >
                                    <span className="pl-6 ">{route.name}</span>
                                </NavLink>
                            );
                        })}
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
