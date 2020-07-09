/* eslint-disable no-undef */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    important: true,
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter var', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                'sc-beige': {
                    light: '#BFBDBD',
                    dark: '#8D8A89',
                },
                'sc-blue': {
                    '100': '#EBF7FC',
                    '200': '#3DB5E6',
                    '300': '#2774B2',
                    '400': '#4F78A0',
                    '500': '#1C355E',
                },
                'sc-gray': {
                    light: '#B7C8D0',
                    dark: '#8599A1',
                },
                'sc-purple': '#673278',
            },
        },
        linearGradientDirections: {
            // defaults to these values
            t: 'to top',
            tr: 'to top right',
            r: 'to right',
            br: 'to bottom right',
            b: 'to bottom',
            bl: 'to bottom left',
            l: 'to left',
            tl: 'to top left',
        },
        linearGradientColors: {
            dark: ['#3db5e6', '#673278'],
            light: ['#FFFFFF', '#EBF7FC'],
            blue: ['#EBF7FC', '#1C355E'],
        },
    },
    variants: {
        // all the following default to ['responsive']
        backgroundImage: ['responsive'], // this is for the "bg-none" utility
        linearGradients: ['responsive'],
        radialGradients: ['responsive'],
        conicGradients: ['responsive'],
        repeatingLinearGradients: ['responsive'],
        repeatingRadialGradients: ['responsive'],
        repeatingConicGradients: ['responsive'],
    },

    plugins: [
        require('tailwindcss-gradients'),
        require('@tailwindcss/ui')({
            layout: 'sidebar',
        }),
    ],
};
