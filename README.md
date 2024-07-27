
# @tigasorei/xstyled

A simple UI Library for React project, made with `styled-components` and `@xstyled/styled-components`


## Installation

To install this library you can use npm or yarn

```bash
  # using npm
  npm install @tigasorei/xstyled
  
  # using yarn
  yarn add @tigasorei/xstyled
```

    
## Usage/Examples

Here is basic example of how to use this library

### Import and use components

```javascript
import { Button } from '@tigasorei/xstyled'

function App() {
  return <Button mb="10px">Hello from Button</Button>
}
```

### Additional configuration

```javascript
import { ThemeProvider } from "@xstyled/styled-components";
import { theme, Preflight } from '@tigasorei/xstyled';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Preflight />
      <ComponentA />
      <ComponentB />
    </ThemeProvider>
  );
};

export default App;
```
## Documentation

For complete documentation and more usage examples, please visit [Documentation](https://linktodocumentation)


## Contributing

We welcome contributions! If you would like to contribute, please follow these steps:

1. Fork this repository.
2. Create a new branch: `git checkout -b your-feature`.
3. Make your changes and commit them: `git commit -m 'Add new feature'`.
4. Push to the branch: `git push origin your-feature`.
5. Create a Pull Request.


## License

[ISC](https://choosealicense.com/licenses/ISC/)

