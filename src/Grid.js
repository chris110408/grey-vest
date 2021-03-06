import styled from '@emotion/styled'
import theme from './theme'
import _ from 'lodash/fp'
import F from 'futil'

let formatAreas = _.flow(
  _.map(F.quote),
  _.join(' ')
)

let repeatNumber = F.when(_.isNumber, x => `repeat(${x}, 1fr)`)

let Grid = styled.div(
  ({
    columns,
    rows,
    areas,
    gap,
    rowGap,
    columnGap,
    placeContent,
    placeItems,
    inline = false,
  }) => ({
    display: `${inline ? 'inline-' : ''}grid`,
    gridTemplateColumns: repeatNumber(columns),
    gridTemplateRows: repeatNumber(rows),
    gridTemplateAreas: formatAreas(areas),
    gridRowGap: F.alias(rowGap || gap, theme.spaces),
    gridColumnGap: F.alias(columnGap || gap, theme.spaces),
    placeContent,
    placeItems,
  })
)

export default Grid
