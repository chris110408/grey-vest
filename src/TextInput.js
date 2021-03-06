/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'
import { observer } from 'mobx-react'
import _ from 'lodash/fp'
import theme from './theme'

let TextInput = ({ type = 'text', disabled, error, ...props }, ref) => (
  <input
    {...{ type, ref, disabled, ...props }}
    css={[theme.inputStyle, theme.fonts.Text, error && { borderColor: theme.colors.error }]}
  />
)

export default _.flow(
  React.forwardRef,
  observer
)(TextInput)
