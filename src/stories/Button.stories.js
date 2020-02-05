import React from 'react'
import { action } from '@storybook/addon-actions'
import { Button, Grid, Flex } from '..'
import { flag, asProp } from './commonProps'

let props = {
  rows: [],
  sections: {
    'size flags': [{ name: 'compact', ...flag }, { name: 'large', ...flag }],
    other: [
      {
        name: 'onClick',
        description: 'Click handler for button',
        type: { summary: 'function' },
        defaultValue: { summary: '() => {}' },
      },
      { ...asProp, defaultValue: { summary: `'button'` } },
    ],
  },
}

export default {
  title: 'Button',
  component: Button,
  parameters: {
    componentSubtitle: 'With five color variations and three sizes',
    props,
    info:
`
GreyVest's Button component features five styling variants: **primary**, **secondary**, **tertiary**, **danger**, and **ghost**. The variants are subcomponents of Button (eg \`Button.Primary\`).
`
  },
}

let clickAction = () => action('clicked')()

let Container = ({ cols = 3, ...props }) => (
  <Grid
    gap={2}
    columns={`repeat(${cols}, auto)`}
    placeItems="baseline"
    {...props}
  />
)

export let regular = () => (
  <Container>
    <Button onClick={clickAction}>Regular Button</Button>
    <Button large onClick={clickAction}>
      Large Button
    </Button>
    <Button compact onClick={clickAction}>
      Compact Button
    </Button>
  </Container>
)

export let primary = () => (
  <Container>
    <Button.Primary>Regular</Button.Primary>
    <Button.Primary large>Large</Button.Primary>
    <Button.Primary compact>Compact</Button.Primary>
  </Container>
)

export let secondary = () => (
  <Container>
    <Button.Secondary>Regular</Button.Secondary>
    <Button.Secondary large>Large</Button.Secondary>
    <Button.Secondary compact>Compact</Button.Secondary>
  </Container>
)
secondary.story = {
  name: 'Secondary (default)',
  parameters: {
    docs: {
      storyDescription:
        'Since the secondary color variant is also the default styling for Button, it can be used with either `Button` or `Button.Secondary`.',
    },
  },
}

export let tertiary = () => (
  <Container>
    <Button.Tertiary>Regular</Button.Tertiary>
    <Button.Tertiary large>Large</Button.Tertiary>
    <Button.Tertiary compact>Compact</Button.Tertiary>
  </Container>
)

export let danger = () => (
  <Container>
    <Button.Danger>Regular</Button.Danger>
    <Button.Danger large>Large</Button.Danger>
    <Button.Danger compact>Compact</Button.Danger>
  </Container>
)

export let ghost = () => (
  <Container>
    <Button.Ghost>Regular</Button.Ghost>
    <Button.Ghost large>Large</Button.Ghost>
    <Button.Ghost compact>Compact</Button.Ghost>
  </Container>
)

export let disabled = () => (
  <Container cols={4}>
    <Button.Primary disabled>Primary</Button.Primary>
    <Button.Secondary disabled>Secondary</Button.Secondary>
    <Button.Tertiary disabled>Tertiary</Button.Tertiary>
    <Button.Danger disabled>Danger</Button.Danger>
  </Container>
)

export let withIcon = () => (
  <Container cols={3}>
    <Flex inline column gap={1} alignItems="flex-start">
      <Button icon="keyboard_arrow_down">Dropdown</Button>
      <Button icon="beach_access">Other</Button>
    </Flex>
    <Flex inline column gap={1} alignItems="flex-start">
      <Button large icon="keyboard_arrow_down">Dropdown</Button>
      <Button large icon="face">Other</Button>
    </Flex>
    <Flex inline column gap={1} alignItems="flex-start">
      <Button compact icon="keyboard_arrow_down">Dropdown</Button>
      <Button compact icon="eco">Other</Button>
    </Flex>
  </Container>
)

export let asDiv = () => <Button as="div">Click</Button>
