import { ComponentMeta, ComponentStory } from '@storybook/react'
import Jobs from '.'

export default {
  title: 'Jobs',
  component: Jobs
} as ComponentMeta<typeof Jobs>

const Story: ComponentStory<typeof Jobs> = () => <Jobs />

export const Default = Story.bind({})
