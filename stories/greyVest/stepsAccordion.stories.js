import F from 'futil-js'
import React from 'react'
import { storiesOf } from '@storybook/react'
import decorator from './decorator'
import {
  Button,
  TextInput,
  StepsAccordion,
  AccordionStep,
} from '../../src/greyVest'

let makeStepTitle = title => n => (
  <h1>
    <span className="step-number">{n + 1}) </span>
    {title}
  </h1>
)

storiesOf('Components (Grey Vest)|StepsAccordion', module)
  .addDecorator(decorator)
  .addWithJSX('StepsAccordion', () => {
    let isClicked = F.stateLens(React.useState(false))
    return (
      <StepsAccordion>
        <AccordionStep isRequired={true} title={makeStepTitle()}>
          <div>
            <div>A</div>
            <div>B</div>
            <div>C</div>
          </div>
        </AccordionStep>
        <AccordionStep
          isRequired={true}
          title={makeStepTitle('Click the button')}
        >
          <Button onClick={F.on(isClicked)}>
            Button {F.view(isClicked) && '(clicked)'}
          </Button>
        </AccordionStep>
        <AccordionStep title={makeStepTitle('Type something')}>
          <TextInput type="text" />
        </AccordionStep>
      </StepsAccordion>
    )
  })
