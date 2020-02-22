import React from 'react';
import styled from 'styled-components';

const StyledChildComponent = styled.div`
  color: red;

  ${(props) => props.childOverwrite}
`

function ChildComponent({ childOverwrite }) {
  return (
    <StyledChildComponent childOverwrite={childOverwrite}>
      I'm the child and this text is red originally.
    </StyledChildComponent>
  );
}

export default ChildComponent;
