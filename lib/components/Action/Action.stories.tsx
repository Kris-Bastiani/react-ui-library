import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Action from './index.tsx';

const meta: Meta<typeof Action> = {
	component: Action,
	title: 'Atoms/Action',
};

export default meta;

type Story = StoryObj<typeof Action>;

export const Sandbox: Story = {
	args: {
		children: 'I am an action',
	},
};

export const AsButton: Story = {
	args: {
		onClick: fn(),
		children: 'I am an action',
	},
};

export const AsLink: Story = {
	render: () => <Action href='https://github.com/Kris-Bastiani/react-ui-library'>I am an action</Action>,
};
