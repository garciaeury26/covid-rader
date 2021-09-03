import React from "react";
import ReactDOM from "react-dom";
import { CovidApp } from "./CovidApp";

import { ChakraProvider } from "@chakra-ui/react";

const divRoot = document.getElementById("root");

ReactDOM.render(
    <ChakraProvider>
        <CovidApp />
    </ChakraProvider>,
    divRoot
);
