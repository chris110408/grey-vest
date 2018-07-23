import * as F from 'futil-js'
import _ from 'lodash/fp'
import React from 'react'
import { inject, observer } from 'mobx-react'
import { ModalPicker, Modal, FilteredPicker, Dynamic } from '../layout/'
import { fieldsToOptions } from '../FilterAdder'
import { partial } from '../utils/mobx-react-utils'
import { get } from '../utils/mobx-utils'

let FieldPicker = partial(
  {
    Modal,
    Picker: FilteredPicker,
  },
  ModalPicker
)

let FilterContents = inject(_.defaults)(
  observer(({ node, root, fields, types = {} }) => {
    // `get` allows us to create a dependency on field before we know it exists (because the client will only add it if it's a type that uses it as it wouldn't make sense for something like `results`)
    let nodeField = get(node, 'field')
    return (
      <div
        style={{
          display: 'flex',
          width: '100%',
        }}
      >
        <FieldPicker
          label={
            nodeField ? _.get([nodeField, 'label'], fields) : 'Pick a Field'
          }
          options={fieldsToOptions(fields)}
          // TODO: consider type options in case this isn't safe, e.g. a field/type change action
          onChange={field => root.mutate(node.path, { field })}
        />
        {nodeField && (
          <div style={{ margin: '0 5px' }}>
            <select
              onChange={({ target: { value } }) => {
                root.typeChange(node, value)
              }}
              value={F.when(_.isNil, undefined)(node.type)} // fix null value issue...
            >
              {_.map(
                x => (
                  <option key={x.value} value={x.value} disabled={x.disabled}>
                    {x.label}
                  </option>
                ),
                [
                  {
                    value: null,
                    label: 'Select Type',
                    disabled: node.type,
                  },
                  ...F.autoLabelOptions(
                    _.get([nodeField, 'typeOptions'], fields)
                  ),
                ]
              )}
            </select>
          </div>
        )}
        {node.type && (
          <div
            style={{
              display: 'inline-block',
              verticalAlign: 'top',
              width: '100%',
              marginRight: '5px',
            }}
          >
            <Dynamic component={types[node.type]} node={node} tree={root} />
          </div>
        )}
      </div>
    )
  })
)
FilterContents.displayName = 'FilterContents'

export default FilterContents