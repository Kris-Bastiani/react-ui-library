import type { Meta, StoryObj } from '@storybook/react';
import Heading from './index.tsx';

const meta: Meta<typeof Heading> = {
	component: Heading,
	title: 'Atoms/Heading',
};

export default meta;

type Story = StoryObj<typeof Heading>;

export const Sandbox: Story = {
	args: {
		level: 1,
		children: (
			<>
				Lorem ipsum dolor sit amet
				{' '}
				<em>consectetur</em>
				{' '}
				adipiscing elit
			</>
		),
	},
};
