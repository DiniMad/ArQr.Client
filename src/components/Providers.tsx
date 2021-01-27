import React, {FunctionComponent} from 'react';
import StyleAndThemeProvider from "./StyleAndThemeProvider";
import {SnackbarProvider} from "notistack";

export const Providers: FunctionComponent = ({children}) => {
    return (
        <StyleAndThemeProvider>
            <SnackbarProvider maxSnack={1} dir="rtl" className="notification">
            {children}
            </SnackbarProvider>
        </StyleAndThemeProvider>
    );
};