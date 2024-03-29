import { type StoryObj, type Meta } from '@storybook/angular';
import { NotStandaloneComponent } from '../app/not-standalone/not-standalone.component';

const meta: Meta<NotStandaloneComponent> = {
  title: 'Example/Not_Standalone_Broken',
  component: NotStandaloneComponent,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<NotStandaloneComponent>;
export const Not_Standalone_Broken: Story = {};
