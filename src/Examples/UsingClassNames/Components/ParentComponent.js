import React from 'react';
import styled from 'styled-components';
import ChildComponent from './ChildComponent';


const StyledParent = styled.div`
  font-weight: bolder;
  color: green;
  .child {
    color: red;
  }
`

function ParentComponent({ className }) {
  return (
    <StyledParent className={className}>
      I'm the parent and this text is green originally.
      <ChildComponent></ChildComponent>
    </StyledParent>
  );
}

export default ParentComponent;
