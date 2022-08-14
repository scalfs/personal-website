import { ComponentMeta, ComponentStory } from '@storybook/react'
import Title from '.'

export default {
  title: 'Title',
  component: Title
} as ComponentMeta<typeof Title>

const Story: ComponentStory<typeof Title> = () => <Title>Heading</Title>

export const Default = Story.bind({})
