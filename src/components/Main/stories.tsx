import { ComponentMeta, ComponentStory } from '@storybook/react'
import Main from '.'

export default {
  title: 'Main',
  component: Main
} as ComponentMeta<typeof Main>

const Story: ComponentStory<typeof Main> = () => <Main />

export const Basic = Story.bind({})
