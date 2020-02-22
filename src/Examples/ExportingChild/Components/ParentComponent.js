import React from 'react';
import styled from 'styled-components';
import ChildComponent, { StyledChildComponent } from './ChildComponent';


const StyledParent = styled.div`
  font-weight: bolder;
  color: green;
`

function ParentComponent({ className }) {
  return (
    <StyledParent className={className}>
      I'm the parent and this text is green originally.
      <ChildComponent></ChildComponent>
    </StyledParent>
  );
}

export { StyledChildComponent };
export default ParentComponent;
