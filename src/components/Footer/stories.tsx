import { ComponentMeta, ComponentStory } from '@storybook/react'
import Footer from '.'

export default {
  title: 'Footer',
  component: Footer
} as ComponentMeta<typeof Footer>

const Story: ComponentStory<typeof Footer> = () => <Footer />

export const Default = Story.bind({})
