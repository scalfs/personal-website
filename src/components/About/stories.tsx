import { ComponentMeta, ComponentStory } from '@storybook/react'
import About from '.'

export default {
  title: 'About',
  component: About
} as ComponentMeta<typeof About>

const Story: ComponentStory<typeof About> = () => <About />

export const Default = Story.bind({})
