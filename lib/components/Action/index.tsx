import type { ComponentProps, JSX } from 'react';

type AnchorActionProps = ComponentProps<'a'> & {
	disabled?: boolean;
};

type ButtonActionProps = ComponentProps<'button'>;

type ActionOverload = {
	(props: AnchorActionProps): JSX.Element;
	(props: ButtonActionProps): JSX.Element;
};

const hasHref = (props: AnchorActionProps | ButtonActionProps): props is AnchorActionProps => 'href' in props;

const isButtonType = (value: unknown): value is ButtonActionProps['type'] => (
	typeof value === 'string' && ['button', 'reset', 'submit'].includes(value)
);

const Action: ActionOverload = ({
	disabled = undefined,
	children = undefined,
	...attrs
}: AnchorActionProps | ButtonActionProps) => {
	if (hasHref(attrs)) return <a aria-disabled={disabled} {...attrs}>{children}</a>;

	const type = isButtonType(attrs.type) ? attrs.type : 'button';

	return (
		<button
			aria-disabled={disabled}
			disabled={disabled}
			{...attrs as ButtonActionProps}
			type={type}
		>
			{children}
		</button>
	);
};

export default Action;
