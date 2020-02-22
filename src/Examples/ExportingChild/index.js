import React from 'react';
import styled from 'styled-components';
import ParentComponent, { StyledChildComponent } from './Components/ParentComponent';

const StyledParentComponent = styled(ParentComponent)`
  color: blue;
  ${StyledChildComponent} {
    color: purple;
  }
`

function ExportingChild() {
  return (
    <>
      <h2>2. Exporting child</h2>
      <p>In this approach you expose the styled children from the parent one, so you can use them like classNames to overwrite their styles.</p>

      <h3>Original components</h3>
      <ParentComponent></ParentComponent>

      <h3>Overwritten components</h3>
      <StyledParentComponent></StyledParentComponent>
    </>
  );
};

export default ExportingChild;
