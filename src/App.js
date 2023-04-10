/* eslint-disable jsx-a11y/heading-has-content */
import React from "react";
import Header from "./components/Header";
import {Container} from "@mui/material";
function App() {
  return (
   <Container className='tweets-simulator' maxWidth={false}>
    <Header/>
    </Container>
  );
}

export default App;
