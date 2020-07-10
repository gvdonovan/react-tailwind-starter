import React from 'react';

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

const ColorPalette = () => {
    return (
        <div className="px-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 col-gap-2 row-gap-6">
                <ColorTile color="Orange" />
                <ColorTile color="Gray" />
                <ColorTile color="Violet" />
                <ColorTile color="Aqua" />
                <ColorTile color="Green" />
                <ColorTile color="Yellow" />
            </div>
        </div>
    );
};

export default ColorPalette;
