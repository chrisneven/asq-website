import { extendTheme, theme as chakraTheme } from '@chakra-ui/react';

const fonts = { ...chakraTheme.fonts, mono: `'Menlo', monospace` };

const base = {
    ...chakraTheme,
    colors: {
        ...chakraTheme.colors,
        black: '#16161D',
        brand: {
            100: '#4D1F29',
            200: '#76313B',
            300: '#9F444A',
            400: '#C75958',
            500: '#EE786C',
            600: '#F38F7E',
            700: '#F7A591',
            800: '#FABAA4',
            900: '#FCCDB9',
        },
        clay: {
            100: '#E7E7EC',
            200: '#CFD0D9',
            300: '#9FA0B2',
            400: '#87899F',
            500: '#6E718C',
            600: '#565979',
            700: '#3E4165',
            800: '#262A52',
            900: '#0E123F',
        },
    },
    fonts,
} as const;

export type Theme = typeof base;

const theme = extendTheme(base);

export default theme;
