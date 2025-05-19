import type { ComponentPropsWithoutRef } from 'react';

export interface HeadingProps extends ComponentPropsWithoutRef<'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'> {
	level?: 1 | 2 | 3 | 4 | 5 | 6;
}

const Heading = ({ level = 1, children = undefined, ...attrs }: HeadingProps) => {
	const Element: keyof HTMLElementTagNameMap = `h${level}`;
	return <Element {...attrs}>{children}</Element>;
};

export default Heading;
