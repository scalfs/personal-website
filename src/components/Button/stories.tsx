import { ComponentMeta, ComponentStory } from '@storybook/react'
import Button from '.'

export default {
  title: 'Button',
  component: Button
} as ComponentMeta<typeof Button>

const Story: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>Click Me</Button>
)

export const Default = Story.bind({})
