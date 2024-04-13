import React, { useState } from "react";
import styled from "styled-components";
import bg from "./img/bg.png";
import { MainLayout } from "./styles/Layout";
import Orb from "./components/Orb/Orb";
import Navigation from "./components/Navigation/Navigation";

function App() {
  const [active, setActive] = React.useState(1); //menu id starts from 1

  return (
    <>
      <AppStyled className="App">
        <Orb />
        <MainLayout>
          <Navigation active={active} setActive={setActive} />
        </MainLayout>
      </AppStyled>
    </>
  );
}

const AppStyled = styled.div`
  height: 100vh;
  background-image: url(${(props) => props.bg});
  position: relative;
`;

export default App;
