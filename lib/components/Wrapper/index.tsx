import type { ComponentProps, ElementType, ReactNode } from 'react';

type WrapperOwnProps<E extends ElementType = ElementType> = {
	as?: E
	children?: ReactNode;
}

type WrapperProps<E extends ElementType> = WrapperOwnProps<E> &
  Omit<ComponentProps<E>, keyof WrapperOwnProps>

const DEFAULT_ELEMENT = 'div';

const Wrapper = <E extends React.ElementType = typeof DEFAULT_ELEMENT>({
	as = undefined,
	children = undefined,
	...attrs
}: WrapperProps<E>) => {
	const Element = as || DEFAULT_ELEMENT;
	if (!as) return children;
	return <Element {...attrs}>{children}</Element>;
};

export default Wrapper;
