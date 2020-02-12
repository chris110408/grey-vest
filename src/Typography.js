/** @jsx jsx */
import { jsx } from '@emotion/core'
import { forwardRef } from 'react'
import _ from 'lodash/fp'
import { getVariants } from './utils'
import theme from './theme'

let toComponent = ({ variants, ...styles }) =>
  forwardRef(({ as: As = 'span', ...props }, ref) => (
    <As
      css={[styles, ...getVariants(props, variants)]}
      {...{ ref, ...props }}
    />
  ))

// these have to be statically declared so they can be named exports :(
let { Text, Subtitle, Title } = _.mapValues(toComponent, theme.fonts)
export { Text, Subtitle, Title }
