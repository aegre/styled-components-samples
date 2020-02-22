import React from 'react';
import styled from 'styled-components';
import UsingClassNames from './Examples/UsingClassNames';
import ExportingChild from './Examples/ExportingChild';
import ExternalStyledComponent from './Examples/ExternalStyledComponent';

const StyledAppContainer = styled.div`
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`

function App() {
  return (
    <StyledAppContainer>
      <h1>Styles of overwritting children styles with styled-components</h1>
      <UsingClassNames></UsingClassNames>
      <ExportingChild></ExportingChild>
      <ExternalStyledComponent></ExternalStyledComponent>
    </StyledAppContainer>
  );
}

export default App;
