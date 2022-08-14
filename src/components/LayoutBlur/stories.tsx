import { ComponentMeta, ComponentStory } from '@storybook/react'
import LayoutBlur from '.'

export default {
  title: 'LayoutBlur',
  component: LayoutBlur
} as ComponentMeta<typeof LayoutBlur>

const Story: ComponentStory<typeof LayoutBlur> = (args) => (
  <LayoutBlur {...args} />
)

export const Default = Story.bind({})
