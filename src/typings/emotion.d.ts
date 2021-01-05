/* eslint-disable @typescript-eslint/no-empty-interface */
import '@emotion/react';
import { Theme as UITheme } from '../constants/theme';

declare module '@emotion/react' {
    export interface Theme extends UITheme {}
}
