import React from 'react'

export let Grid = ({ style, columns, gap, ...x }) => (
  <div
    style={{
      display: 'grid',
      ...(columns && {
        gridTemplateColumns: columns,
        msGridTemplateColumns: columns,
      }),
      ...(gap && { gridGap: gap }),
      ...style,
    }}
    {...x}
  />
)