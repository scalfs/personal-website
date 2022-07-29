import { ComponentMeta, ComponentStory } from '@storybook/react'
import Header from '.'

export default {
  title: 'Header',
  component: Header
} as ComponentMeta<typeof Header>

const Story: ComponentStory<typeof Header> = (args) => <Header {...args} />

export const Default = Story.bind({})
