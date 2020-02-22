import React from 'react';
import styled from 'styled-components';
import ChildComponent from './ChildComponent';


const StyledParent = styled.div`
  font-weight: bolder;
  color: green;

  ${(props) => props.parentOverwrite || ''}
`

function ParentComponent({ parentOverwrite, childOverwrite }) {
  return (
    <StyledParent parentOverwrite={parentOverwrite}>
      I'm the parent and this text is green originally.
      <ChildComponent childOverwrite={childOverwrite}></ChildComponent>
    </StyledParent>
  );
}

export default ParentComponent;
