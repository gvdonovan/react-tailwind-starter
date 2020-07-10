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
                'isn-orange': {
                    '100': '#FFB070',
                    '200': '#FF6E42',
                    '300': '#DD4814',
                    '400': '#AF360B',
                },
                'isn-gray': {
                    '100': '#E0E0E0',
                    '200': '#AAAAAA',
                    '300': '#6D6D6D',
                    '400': '#3D3D3D',
                },
                'isn-violet': {
                    '100': '#C4AFB9',
                    '200': '#89687C',
                    '300': '#4F324C',
                    '400': '#37213A',
                },
                'isn-aqua': {
                    '100': '#C9E3DC',
                    '200': '#7BBBB2',
                    '300': '#3D7066',
                    '400': '#23423A',
                },
                'isn-green': {
                    '100': '#CCDC00',
                    '200': '#92D400',
                    '300': '#5B8F22',
                    '400': '#3C4C09',
                },
                'isn-yellow': {
                    '100': '#FDE65F',
                    '200': '#FECB00',
                    '300': '#C79900',
                    '400': '#867A24',
                },
            },
        },
        linearGradientDirections: {
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
            'isn-orange': ['#FFB070', '#AF360B'],
            'isn-orange-light': ['#FFB070', '#FF6E42'],
            'isn-orange-dark': ['#DD4814', '#AF360B'],
            'isn-gray': ['#E0E0E0', '#3D3D3D'],
            'isn-gray-light': ['#E0E0E0', '#AAAAAA'],
            'isn-gray-dark': ['#6D6D6D', '#3D3D3D'],
            'isn-violet': ['#C4AFB9', '#37213A'],
            'isn-violet-light': ['#C4AFB9', '#89687C'],
            'isn-violet-dark': ['#4F324C', '#37213A'],
            'isn-aqua': ['#C9E3DC', '#23423A'],
            'isn-aqua-light': ['#C9E3DC', '#7BBBB2'],
            'isn-aqua-dark': ['#3D7066', '#23423A'],
            'isn-green': ['#CCDC00', '#3C4C09'],
            'isn-green-light': ['#CCDC00', '#92D400'],
            'isn-green-dark': ['#5B8F22', '#3C4C09'],
            'isn-yellow': ['#FDE65F', '#867A24'],
            'isn-yellow-light': ['#FDE65F', '#FECB00'],
            'isn-yellow-dark': ['#C79900', '#867A24'],
        },
    },
    variants: {
        backgroundImage: ['responsive'],
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
