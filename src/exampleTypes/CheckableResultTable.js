import React from 'react'
import _ from 'lodash/fp'
import { observer } from 'mobx-react'
import F from 'futil-js'
import InjectTreeNode from '../utils/injectTreeNode'
import { getResults } from '../utils/schema'

// Extends ResultTable with a checkbox column
// Writes to a lens called `selected`, using getValue to map the selected record to a value.
// getValues uses _.iteratee, so it defaults to identity and supports things like strings to get props
let CheckableResultTable = InjectTreeNode(
  observer(
    ({ node, fields, selected, getValue, Checkbox, ResultTable, ...props }) => {
      let results = getResults(node).slice()
      let allChecked = results.length === F.view(selected).length
      let checkAll = F.sets(
        allChecked
          ? []
          : _.map(
              _.flow(
                _.get('_source'),
                _.iteratee(getValue)
              ),
              results
            ),
        selected
      )
      return (
        <ResultTable
          fields={{
            _checkbox: {
              hideMenu: true,
              label: <Checkbox checked={allChecked} onChange={checkAll} />,
              display: (x, y) => (
                <Checkbox
                  {...F.domLens.checkboxValues(
                    _.iteratee(getValue)(y),
                    selected
                  )}
                />
              ),
            },
            ...fields,
          }}
          {...props}
        />
      )
    }
  )
)
CheckableResultTable.displayName = 'CheckableResultTable'

export default CheckableResultTable
