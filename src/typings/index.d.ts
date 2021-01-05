declare module '*.svg' {
    import { ComponentType, SVGAttributes } from 'react';

    const svg: ComponentType<SVGAttributes<SVGElement>>;
    export default svg;
}
