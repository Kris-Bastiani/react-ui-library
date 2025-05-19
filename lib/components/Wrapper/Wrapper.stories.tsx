import type { Meta, StoryObj } from '@storybook/react';
import Wrapper from './index.tsx';

const meta: Meta<typeof Wrapper> = {
	component: Wrapper,
	title: 'Atoms/Wrapper',
};

export default meta;

type Story = StoryObj<typeof Wrapper>;

export const Sandbox: Story = {
	args: {
		as: 'div',
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
