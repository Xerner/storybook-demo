import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { NotStandaloneComponent } from '../app/not-standalone/not-standalone.component';
import { NotStandalone2Component } from '../app/not-standalone-2/not-standalone2.component';

const meta: Meta<NotStandaloneComponent> = {
  title: 'Example/Not_Standalone',
  component: NotStandaloneComponent,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    moduleMetadata({
      declarations: [
        NotStandalone2Component
      ]
    })
  ]
};

export default meta;
type Story = StoryObj<NotStandaloneComponent>;
export const Not_Standalone: Story = {};
