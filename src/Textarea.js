/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react'
import { observer } from 'mobx-react'
import _ from 'lodash/fp'
import theme from './theme'

let Textarea = (props, ref) => (
  <textarea
    {...props}
    ref={ref}
    rows={4}
    css={[theme.inputStyle, { height: 'auto' }]}
  />
)

export default _.flow(
  React.forwardRef,
  observer
)(Textarea)
