import { type Meta, type StoryObj } from '@storybook/angular';
import { PresentationComponent } from '../app/presentation/presentation.component';

const meta: Meta<PresentationComponent> = {
  title: 'Example/Presentation',
  component: PresentationComponent,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<PresentationComponent>;

export const Presentation: Story = {};
