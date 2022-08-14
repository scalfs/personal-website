import { ComponentMeta, ComponentStory } from '@storybook/react'
import Contact from '.'

export default {
  title: 'Contact',
  component: Contact
} as ComponentMeta<typeof Contact>

const Story: ComponentStory<typeof Contact> = () => <Contact />

export const Default = Story.bind({})
