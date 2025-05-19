import type { ReactNode } from 'react';
import type { HeadingProps } from '@lib/components/Heading/index.tsx';
import Heading from '@lib/components/Heading/index.tsx';
import Wrapper from '@lib/components/Wrapper/index.tsx';

export interface TextLockupProps {
	heading?: string | HeadingProps;
	kicker?: string;
	children?: ReactNode;
}

const TextLockup = ({
	heading = undefined,
	kicker = undefined,
	children = undefined,
}: TextLockupProps) => {
	const titleObj: TextLockupProps['heading'] = typeof heading === 'string' ? { level: 2, children: heading } : heading;
	const ElHgroup = heading && kicker ? 'hgroup' : undefined;
	const ElChildren = typeof children === 'string' ? 'p' : undefined;

	return (
		<>
			<Wrapper as={ElHgroup}>
				{titleObj && <Heading {...titleObj} />}
				{kicker && <p className='txt__kicker'>{kicker}</p>}
			</Wrapper>
			<Wrapper as={ElChildren}>{children}</Wrapper>
		</>
	);
};

export default TextLockup;
