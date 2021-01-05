import React, { ComponentType, SVGAttributes } from 'react';

type Size = 's' | 'm' | 'l' | 'xl';

const sizeMap: Record<Size, number> = {
    s: 24,
    m: 32,
    l: 40,
    xl: 56,
};
export interface IconProps extends SVGAttributes<SVGElement> {
    Component: ComponentType<SVGAttributes<SVGElement>>;
    size?: Size;
}

const Icon = ({ Component, size = 'm', ...rest }: IconProps) => (
    <Component fill="currentColor" width={sizeMap[size]} height={sizeMap[size]} {...rest} />
);

export default Icon;
