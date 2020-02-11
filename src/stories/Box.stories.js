import React from 'react'
import { Box, Grid, Text } from '..'
import _ from 'lodash/fp'
import theme from '../theme'

export default { title: 'Box', component: Box }

let Backgrounds = ({ children }) => (
  <Grid columns={3}>
    {_.map(
      bg => (
        <div style={{ backgroundColor: bg, padding: 20 }}>{children}</div>
      ),
      ['white', 'grey', 'black']
    )}
  </Grid>
)

export let normalBox = () => (
  <Backgrounds>
    <Box>
      <Text>Box Contents</Text>
    </Box>
  </Backgrounds>
)

export let modalBox = () => (
  <Backgrounds>
    <Box modal>
      <Text>Box Contents</Text>
    </Box>
  </Backgrounds>
)

export let popupBox = () => (
  <Backgrounds>
    <Box popup>
      <Text>Box Contents</Text>
    </Box>
  </Backgrounds>
)

export let controlledPadding = () => {
  let GreyPaddingBox = ({ children, ...props }) => (
    <Box style={{ background: 'lightgrey' }} {...props}>
      <Text as="div" style={{ background: 'white' }}>{children}</Text>
    </Box>
  )
  return (
    <Grid gap={2}>
      <GreyPaddingBox paddingX={4} paddingY="sm">
        {theme.space(4)}px by {theme.space('sm')}px padding
      </GreyPaddingBox>
      <GreyPaddingBox paddingX={1} paddingY="lg">
        {theme.space(1)}px by {theme.spaces.lg}px padding
      </GreyPaddingBox>
      <GreyPaddingBox padding={[0.5, 0.5]}>
        {theme.space(0.5)}px by {theme.space(0.5)}px padding
      </GreyPaddingBox>
      {_.map(
        padding => (
          <GreyPaddingBox padding={padding}>
            {theme.space(padding)}px padding
          </GreyPaddingBox>
        ),
        _.range(0, 5)
      )}
    </Grid>
  )
}
