import { ComponentMeta, ComponentStory } from '@storybook/react'
import Experience from '.'

export default {
  title: 'Experience',
  component: Experience
} as ComponentMeta<typeof Experience>

const Story: ComponentStory<typeof Experience> = () => <Experience />

export const Default = Story.bind({})
