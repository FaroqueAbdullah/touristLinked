import { createContext } from 'react';

const ColorModeContext = createContext({
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    toggleColorMode: () => {},
});

export default ColorModeContext;
