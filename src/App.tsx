import React from 'react';
import {GlobalStyles, Providers} from "./components";
import Home from "./pages/home";

function App() {

    return (
        <Providers>
            <Home/>
            <GlobalStyles/>
        </Providers>
    );
}

export default App;
