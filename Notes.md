# Concepts in Focus

- Styling React Components
  - Using CSS
  - CSS-in-JS
- Styled Components
  - Installation
  - Syntax
  - Importing styled
  - Creating and Exporting Styled Component
  - Importing and Rendering Styled Component
  - Adapting based on props
  - Modularity of Code
  - Conditional Styling using Props
- Advantages of Styled Components
  - Unique Class Names
  - Elimination of dead styles
  - Dynamic Styling
  - Can differentiate between the types of props they receive
  - Easier Debugging
  - Global Styling
- Extending Styles
- The "as" prop
- Boolean Attribute

1.  Styling React Components React Components can be styled in different ways:

        Using CSS
        CSS-in-JS
        SASS & SCSS
        many more...

    1.1 Using CSS Writing CSS in external CSS files for each component and
    passing class name as a value to the className attribute.

File: src/App.js

```
import "./App.css";

const App = () => <h1 className="heading">Hello World</h1>;

export default App;
```

File: src/App.css

```
.heading {
  color: #0070c1;
  font-family: 'Roboto';
}
```

### 1.2 CSS-in-JS

        CSS-in-JS is a styling technique where JavaScript is used to style React
        Components. It can be implemented using the below third party packages.

            - Styled Components
            - Emotion
            - Radium many more...

## 2. Styled Components Styled Components are one of the new ways to use CSS in

modern JavaScript. Components are used to reuse code, similarly Styled
Components are used to reuse styles.

2.1 Installation

    npm install styled-components

2.2 Syntax

    const StyledComponentName = styled.tagName`
    property1: value1;
    property2: value2;
    ...
    `;

Within the template literals ( ), we define the styles.

### Note: StyledComponentName should always start with a Capital letter.

### 2.3 Importing styled

In general, styled components are placed inside the styledComponents.js file.

File: src/styledComponents.js

    import styled from "styled-components";

styled is an internal utility method that transforms the styling from JavaScript
into actual CSS.

### 2.4 Creating and Exporting Styled Component

File: src/styledComponents.js

    import styled from "styled-components";

    export const Heading = styled.h1`
    color: #0070c1;
    font-family: "Roboto";
    `;

### 2.5 Importing and Rendering Styled Component

File: src/App.js

    import "./App.css";
    import { Heading } from "./styledComponents";

    const App = () => <Heading>Hello World</Heading>;

    export default App;

### 2.6 Adapting based on props

With styled components we can re-use the styles created.

    <StyledComponent propName="propValue">...</StyledComponent>

Syntax:

```
const StyledComponentName = styled.tagName`
  property1 : value1;
  property2: ${props => /* access prop value */ };
  ...
`
```
