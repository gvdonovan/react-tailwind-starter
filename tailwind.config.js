/* eslint-disable no-undef */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    important: true,
    theme: {},
    plugins: [
        require('tailwindcss-gradients'),
        require('@tailwindcss/ui')({
            layout: 'sidebar',
        }),
    ],
};
