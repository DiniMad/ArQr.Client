import React, {FunctionComponent} from 'react';
import StyleAndThemeProvider from "./StyleAndThemeProvider";

export const Providers: FunctionComponent = ({children}) => {
    return (
        <StyleAndThemeProvider>
            {children}
        </StyleAndThemeProvider>
    );
};