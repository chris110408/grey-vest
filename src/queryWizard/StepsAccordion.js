import _ from 'lodash/fp'
import F from 'futil-js'
import React from 'react'
import DefaultIcon from '../DefaultIcon'
import WizardStep from './WizardStep'

let splitKeys = _.curry((keys, obj) => [_.pick(keys, obj), _.omit(keys, obj)])

let StepsAccordion = ({
  Button = 'button',
  Icon = DefaultIcon,
  onSubmit = _.noop,
  children,
  ...props
}) => {
  let currentStep = F.stateLens(React.useState(0))
  let splitProps = splitKeys(['stepTitle', 'isRequired'])
  return (
    <div {...props}>
      {React.Children.map(children, (child, i) => {
        let [propsForStep, propsForChild] = splitProps(child.props)
        return (
          <WizardStep
            {...{ Button, Icon, currentStep, onSubmit }}
            key={i}
            step={i}
            totalSteps={_.size(children)}
            {...propsForStep}
          >
            {React.cloneElement(child, propsForChild, child.children)}
          </WizardStep>
        )
      })}
    </div>
  )
}

StepsAccordion.displayName = 'StepsAccordion'
export default StepsAccordion
