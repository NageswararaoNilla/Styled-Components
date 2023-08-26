import './App.css'

import {
  Heading,
  CustomButton,
  OutlineButton,
  PropsButton,
  ConditionalButton,
} from './styledComponents'

const App = () => (
  <>
    <h1 className="heading">Hello World = Normal Heading using CSS file</h1>
    <Heading>Hello World using Heading styled Component = CSS-in-JS</Heading>
    <Heading>Styled Component Buttons</Heading>
    <CustomButton type="button">Click</CustomButton>
    <OutlineButton type="button">Click</OutlineButton>
    <br />
    <Heading>
      Styled Component Buttons = Passing Props = Adapting based on props
    </Heading>
    <PropsButton type="button" color="#ffffff" bgColor="#0070c1">
      Click Here
    </PropsButton>
    <PropsButton type="button" color="#0070c1" bgColor="#ffffff">
      Click Here
    </PropsButton>
    <br />
    <Heading>Styled Component Buttons = Conditional Styling</Heading>
    <ConditionalButton type="button" outline={false}>
      Click On
    </ConditionalButton>
    <ConditionalButton type="button" outline={true}>
      Click On
    </ConditionalButton>
    <br />
    <Heading>Styled Component Buttons= Boolean Attributes</Heading>
    <ConditionalButton type="button">Click On</ConditionalButton>
    <ConditionalButton type="button" outline>
      Click On
    </ConditionalButton>
  </>
)

export default App
