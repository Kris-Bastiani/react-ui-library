import type { Meta, StoryObj } from '@storybook/react';
import TextLockup from './index.tsx';

const meta: Meta<typeof TextLockup> = {
	component: TextLockup,
	title: 'Molecules/TextLockup',
};

export default meta;

type Story = StoryObj<typeof TextLockup>;

export const Sandbox: Story = {
	args: {
		heading: 'Lorem ipsum dolor sit amet',
		children: (
			<>
				<p>
					Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae
					pellentesque sem placerat. In id cursus mi pretium tellus duis convallis.
				</p>
				<p>
					Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus
					bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere.
				</p>
			</>
		),
	},
};
