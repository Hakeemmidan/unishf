# UNISHF

(This is a frontend challenge for a company. UNISHF is a fictional name.)

## Features

- \_\_ specs
  - component
  - unit
- Automatic code linting on commit
  - Uses `eslint`, `prettier`, and git hooks (using `husky`) for a consistent code style
  - [Tutorial followed for setup](https://dev.to/heyitsarpit/eslint-and-prettier-for-react-apps-bonus-next-js-and-typescript-3e46)
- Themed
  - Utilizes `styled-components`'s `ThemeProvider`
  - You could add a new theme by
    - Adding a new root key to the themes object, with all your wanted colors/properties
    - Pass down (or use `React.useContext`) `App.jsx`'s `setTheme` to the place that would control the theme
