import styled from 'styled-components'

export const Heading = styled.h1`
  color: #0070c1;
  font-family: 'Roboto';
`
export const CustomButton = styled.button`
  padding: 10px;
  margin-right: 20px;
  font-size: 15px;
  color: #ffffff;
  border-radius: 4px;
  border: 2px solid #0070c1;
  background-color: #0070c1;
  margin-bottom: 20px;
`
export const OutlineButton = styled.button`
  padding: 10px;
  margin-right: 20px;
  font-size: 15px;
  color: #0070c1;
  border-radius: 4px;
  border: 2px solid #0070c1;
  background-color: #ffffff;
  margin-bottom: 20px;
`

// Adapting based on props

// export const StyledComponentName = styled.tagName`
// property1: value1;
// property2: ${props => props.color /* access prop value */}
// `

export const PropsButton = styled.button`
  padding: 10px;
  margin-right: 20px;
  font-size: 15px;
  color: ${props => props.color};
  border-radius: 4px;
  border: 2px solid #0070c1;
  background-color: ${props => props.bgColor};
  margin-bottom: 20px;
`
// Conditional Styling

// export const StyledComponentName = styled.tagName`
//   property1: value1;
//   property2: ${props => (props.name === someValue ? value2 : value3)};
// `

// Condition ? Expression If True : Expression If False;

export const ConditionalButton = styled.button`
  padding: 10px;
  margin-right: 20px;
  font-size: 15px;
  color: ${props => (props.outline ? '#0070c1' : '#ffffff')};
  border-radius: 4px;
  border: 2px solid #0070c1;
  background-color: ${props => (props.outline ? '#ffffff' : '#0070c1')};
  margin-bottom: 20px;
`
