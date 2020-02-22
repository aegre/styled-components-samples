import React from 'react';
import styled from 'styled-components';
import ParentComponent from './Components/ParentComponent';

const StyledParentComponent = styled(ParentComponent)`
  color: blue;
  .child {
    color: purple;
  }
`

function UsingClassNames() {
  return (
    <>
      <h2>1. Using classNames</h2>
      <p>This approach is simple, you only need to receive a className prop in the parent component. The the children will be styled with single classes.</p>

      <h3>Original components</h3>
      <ParentComponent></ParentComponent>

      <h3>Overwritten components</h3>
      <StyledParentComponent></StyledParentComponent>
    </>
  );
};

export default UsingClassNames;
